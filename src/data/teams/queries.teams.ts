import { Seasons, TeamSlugs } from "@/lib/types/global-hockey-types";
import { pool } from "../db";
interface IGetPlayerByTeam {
    season: number;
    teamSlug: TeamSlugs;
}

export async function getTeamPlayers({season, teamSlug} : IGetPlayerByTeam) {
    /**
     * have to figure out retention
     * 
     */
    const endSeason = season + 9
    const query = await pool.query(
        `SELECT 
            b.player_id
            , b.first_name
            , b.last_name
            , b.player_slug
            , b.position
            , b.birth_date
            , b.jersey_number
            , b.height_in_inches
            , b.weight_in_pounds
            , b.shoots_catches
            , b.status
            , b.amateur_league
            , b.draft_year
            , b.draft_round
            , b.draft_overall
            , b.draft_team
            , cy.contract_id
            , cy.season
            , cy.caphit
            , cy.base_salary
            , cy.signing_bonus
            , cy.performance_bonus
            , COALESCE(cy.base_salary, 0) + COALESCE(cy.signing_bonus, 0) + COALESCE(cy.performance_bonus, 0) AS total_salary
            , cy.minors_salary
            , cy.clause
            , cy.clause_details
            , COALESCE(dc.caphit, 0) AS retained_caphit
            , dc.date AS retention_date
        FROM bios b
            LEFT JOIN contract_years cy ON cy.contract_id = ct.contract_id
            LEFT JOIN deadcaps dc ON dc.contract_id = cy.contract_id AND dc.season = cy.season AND dc.type = 'RETAINED_SALARY'
            RIGHT JOIN transactions t ON t.player_id = b.player_id AND t.tricode = $3 AND t.type IN ('TRADE', 'SPC_FA', 'CLAIMED', '35_PLUS_FA', 'ELC_FA', 'DRAFTED)
        WHERE 
            cy.season >= $1
            AND cy.season <= $2
            AND ct.team_slug = $3
            AND cy.is_boughtout = 'false'
        ORDER BY b.last_name
        
        `, [season, endSeason, teamSlug]
    );

    return query.rows;
}




interface IGetTeamStaff {
    season: number;
    teamSlug: TeamSlugs;
}

export async function getTeamStaff({
    season,
    teamSlug
} :  IGetTeamStaff) {
    const query = await pool.query(`
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
        return query.rows;

}


/**
 * 
 * {PLAYER BIO DATA}
 * Potential Issue -->  acquisition status data might be thrown off if a player has been acquired multiple times by the same team.
 * >> & decide whether to keep those rows to maybe show the "historical player relationship" with the team or to just show the most recent acquisition data
 * >> or distinct 1 want sorted by transaction date
 */

// SELECT 
// 	p.player_id
// 	, p.first_name
// 	, p.last_name
// 	, p.position
// 	, height_in_inches
// 	, weight_in_pounds
// 	, birth_country
// 	-- , p.birth_date
// 	-- , p.shoots_catches
// 	-- acquisition status data
// 	, t.type
// 	, t.date
// 	, t.notes
// 	-- Used to get contract year data
// 	-- , cy.contract_id
// 	-- , cy.caphit
// 	-- , cy.base_salary
// 	-- , cy.signing_bonus
// 	-- , cy.performance_bonus
// 	, cy.*
// 	-- Will be used for retained salary
// 	, dc.*
// 	-- Respective Draft Data
// 	, dp.draft_overall
// 	, dp.draft_year
// 	, dp.original_owner
// 	, dp.current_owner
// 	FROM public.players p
// 	LEFT JOIN transactions t 
// 		ON p.player_id = t.player_id 
// 		AND tricode = 'PHI' 
// 		AND type IN('DRAFTED', 'ACQUIRED', 'EXPANSION_DRAFT', 'CLAIMED', 'SPC_FA', 'OFFERSHEET', 'ELC-FA', 'THIRTY_FIVE_FA')
// 	LEFT JOIN contract_years cy 
// 		ON cy.player_id = p.player_id 
// 		AND cy.season > 2025
// 	LEFT JOIN deadcaps dc 
// 		ON  dc.player_id = p.player_id 
// 		AND dc.contract_id = cy.contract_id
// 		AND dc.year = cy.season
// 		AND dc.type = 'RETAINED_SALARY'
// 	LEFT JOIN draft_picks dp
// 		ON dp.drafted_player_id = p.player_id
// 	WHERE team_tricode = 'PHI'
// ORDER BY cy.caphit DESC NULLS LAST;


