import { TeamSlugs } from "@/lib/types/global-hockey-types";
import { sql } from "../db";


interface ISeasonAndTeamSlug {
    season: number;
    teamSlug: TeamSlugs;
}

export async function getTeamStaff({
    season,
    teamSlug
} :  ISeasonAndTeamSlug) {
    const query = await sql.query(`
        SELECT
        sb.staff_id
        , sb.first_name
        , sb.last_name
        , sb.staff_slug
        , sb.player_id
        FROM staff_bios sb
        LEFT JOIN staff_tenures st ON st.staff_id = sb.staff_id AND st.end_date IS NULL
        WHERE st.team_slug = $2
        AND st.season = $1
    `, [season, teamSlug] );
        return query

}


/**
 * 
 * {PLAYER BIO DATA}
 * Potential Issue -->  acquisition status data might be thrown off if a player has been acquired multiple times by the same team.
 * >> & decide whether to keep those rows to maybe show the "historical player relationship" with the team or to just show the most recent acquisition data
 * >> or distinct 1 want sorted by transaction date
 */


export async function getTeamData({
  season,
  teamSlug,
}: ISeasonAndTeamSlug) {
  const rows = await sql`
    WITH latest_acquisitions AS (
      SELECT DISTINCT ON (t.player_id, t.team)
        t.player_id,
        t.team,
        t.type,
        t.date,
        t.notes
      FROM transactions t
      WHERE t.type IN (
        'DRAFTED',
        'ACQUIRED',
        'EXPANSION_DRAFT',
        'CLAIMED',
        'SPC-FA',
        'OFFERSHEET',
        'ELC-FA',
        'THIRTY_FIVE_FA'
      )
      AND team = ${teamSlug}
      ORDER BY t.player_id, t.team, t.date ASC
    ),

    team_players AS (
      SELECT 
        p.player_id,
        p.first_name,
        p.last_name,
        p.position,
        p.status,

        DATE_PART(
          'year',
          AGE(MAKE_DATE(cy.season, 9, 15), p.birth_date)
        ) AS age_at_sept15,

        CASE
          WHEN p.position IN ('C','LW','RW') THEN 'F'
          WHEN p.position IN ('LD','RD','D') THEN 'D'
          WHEN p.position = 'G' THEN 'G'
          ELSE 'UNKNOWN'
        END AS position_group,

        CASE
          WHEN p.status IN ('NHL','IR','WAIVERS') THEN 'ACTIVE'
          WHEN p.status = 'LTIR' THEN 'LTIR'
          ELSE 'NON_ACTIVE'
        END AS cap_calculation_group,

        t.type,
        t.date,
        t.notes,

        p.height_in_inches,
        p.weight_in_lbs,
        p.birth_country,
        p.birth_date,
        p.shoots_catches,

        cy.season,
        cy.contract_id,
        COALESCE(cy.caphit,0) AS caphit,
        COALESCE(cy.base_salary,0) AS base_salary,
        COALESCE(cy.signing_bonus,0) AS signing_bonus,
        COALESCE(cy.performance_bonus,0) AS performance_bonus,
        cy.clause,
        cy.clause_details,

        AGE(p.birth_date) AS age,

        dc.caphit AS retained_caphit,
        dc.team AS retained_team,

        dp.draft_overall,
        dp.draft_year,
        dp.original_owner,
        dp.current_owner

      FROM players p

      LEFT JOIN contract_years cy
        ON cy.player_id = p.player_id
        AND cy.season > ${season}

      LEFT JOIN latest_acquisitions t
        ON p.player_id = t.player_id

      LEFT JOIN deadcaps dc
        ON dc.player_id = p.player_id
        AND dc.contract_id = cy.contract_id
        AND dc.season = cy.season
        AND dc.type = 'RETAINED_SALARY'

      LEFT JOIN draft_picks dp
        ON dp.drafted_player_id = p.player_id

      WHERE p.team = ${teamSlug}
    ),

     player_metrics AS (
      SELECT
        season,
        type AS acquisition_type,
        cap_calculation_group,
        position_group,
        status,
        shoots_catches,
        caphit,
        -- base_salary,
        -- signing_bonus,
        performance_bonus,
        age_at_sept15,
        height_in_inches,
        weight_in_lbs
      FROM team_players
    ),

    team_outlook AS (
      SELECT
        season,
        cap_calculation_group,
        position_group,
        status,
        acquisition_type,
        COUNT(*) AS player_count,
        SUM(performance_bonus) AS performance_bonus,
        SUM(caphit) AS caphit,
        AVG(age_at_sept15) AS avg_age,
        AVG(height_in_inches) AS avg_height,
        AVG(weight_in_lbs) AS avg_weight
      FROM player_metrics
      GROUP BY season, cap_calculation_group, position_group, status, acquisition_type
    )

    SELECT json_build_object(
      'roster', (SELECT json_agg(team_players) FROM team_players),
      'team_outlook', (SELECT json_agg(team_outlook) FROM team_outlook)
    ) AS data
  `

  return rows[0].data
}

export async function getTeamDeadcaps({
  teamSlug,
  season,
}: ISeasonAndTeamSlug) {
  const rows = await sql`
  WITH team_deadcaps AS (
      SELECT
        b.first_name,
        b.last_name,
        b.position,
        b.birth_date,
        dc.date,
        dc.type,
        dc.player_id,
        dc.season,
        dc.caphit
      FROM deadcaps dc
      JOIN bios b
        ON b.player_id = dc.player_id
      WHERE dc.team = ${teamSlug}
        AND dc.season > ${season}
    ),

    deadcap_outlook AS (
      SELECT
        season,
        type,
        COUNT(*) AS count,
        SUM(caphit) AS caphit
      FROM team_deadcaps
      GROUP BY GROUPING SETS (
        (season),
        (type, season)
      )
    )

    SELECT json_build_object(
      'deadcaps', (SELECT json_agg(team_deadcaps) FROM team_deadcaps),
      'outlook', (SELECT json_agg(deadcap_outlook) FROM deadcap_outlook)
    ) AS data
  `

  return rows[0].data
}


export const getExperienceQuery =    `
WITH player_season_agg AS (
    SELECT 
        p.player_id,
        p.full_name,
        pst.season,
        pst.league,
        p.position,
        p.birth_date,
        
        SUM(pst.games_played) AS total_gp,

        -- Age at key dates (calculated once)
        DATE_PART('year', AGE(MAKE_DATE(pst.season, 9, 15), p.birth_date)) AS age_sept15,
        DATE_PART('year', AGE(MAKE_DATE(pst.season, 12, 30), p.birth_date)) AS age_dec30

    FROM bios p
    JOIN player_season_totals pst ON pst.player_id = p.player_id
    WHERE p.tricode = 'PHI'
      AND pst.league IN ('NHL', 'AHL', 'SHL', 'Liiga', 'KHL', 'AllSvenskan')
    GROUP BY 
        p.player_id, p.full_name, pst.season, pst.league, 
        p.position, p.birth_date
),

season_flags AS (
    SELECT 
        player_id,
        season,
        
        MAX(CASE WHEN league = 'NHL' AND total_gp > 10 THEN 1 ELSE 0 END) 
            AS is_pro_experience,

        MAX(CASE 
                WHEN position != 'G' AND league = 'NHL' AND total_gp > 40 THEN 1
                WHEN position = 'G'  AND league = 'NHL' AND total_gp > 30 THEN 1
                ELSE 0 
            END) 
            AS is_accrued_season,

        MAX(CASE 
                WHEN age_sept15 IN (18, 19) 
                     AND age_dec30 < 20 
                     AND total_gp > 10 
                    THEN 1
                WHEN age_dec30 >= 20 AND total_gp > 0 
                    THEN 1
                ELSE 0 
            END) 
            AS is_pro_season

    FROM player_season_agg
    GROUP BY player_id, season
)

SELECT 
    player_id,
    SUM(is_pro_season)     AS pro_seasons,
    SUM(is_accrued_season) AS accrued_seasons,
    SUM(is_pro_experience) AS pro_experience
FROM season_flags
GROUP BY player_id
ORDER BY pro_seasons DESC;
`


export async function getActiveTeamStaff(teamSlug: TeamSlugs) {
  const rows = await sql`
    SELECT 
      st.role
      , st. start_date
      , sb.birth_date
      , sb.first_name
      , sb.last_name
      , sb.staff_slug
      , AGE(CURRENT_DATE, st.start_date) AS tenure_duration
    FROM staff_tenures st
    JOIN staff_bios sb ON sb.staff_id = st.staff_id
    WHERE team = ${teamSlug}
    AND end_date IS NULL
  `
  return rows
}



export async function getTeamDraftPicks(
  teamSlug: TeamSlugs,
  startYear: number,
  endYear: number
) {
  const rows = await sql`
    SELECT
      dp.pick_id,
      dp.draft_year,
      dp.draft_round,
      dp.original_owner,
      dp.current_owner
    FROM draft_picks dp
    WHERE
      dp.draft_year BETWEEN ${startYear} AND ${endYear}
      AND (
          dp.original_owner = ${teamSlug}
          OR dp.current_owner = ${teamSlug}
      );
  `
  return rows
}


