import { sql } from "../db"
import { PlayerStatusTypes, TeamSlugs } from "@/lib/types/global-hockey-types";

interface IgetPlayer {
    player_slug: string
}

export async function getPlayer({
    player_slug
} :  IgetPlayer) {
    const result = await sql`
        WITH player AS (
            SELECT
                p.player_id,
                p.player_slug,
                p.first_name,
                p.last_name,
                p.birth_date,
                AGE(p.birth_date) AS age,
                p.birth_city,
                p.birth_state_province,
                p.birth_country,
                p.nationality,
                p.height_in_inches,
                p.weight_in_lbs,
                p.position,
                p.jersey_number,
                p.status,
                p.team,
                p.deceased_date,
                dp.draft_year,
                dp.draft_round,
                dp.draft_overall,
                dp.current_owner,
                dp.original_owner
            FROM players p
            LEFT JOIN draft_picks dp ON dp.drafted_player_id = p.player_id
            WHERE p.player_slug = ${player_slug}
            ),

        contracts AS (
                SELECT
                    ct.player_id,
                    ct.contract_id,
                    ct.signing_date,
                    ct.signing_team,
                    ct.contract_type,
                    cy.season,
                    DATE_PART(
                        'year',
                        AGE(MAKE_DATE(cy.season, 9, 15), p.birth_date)
                    ) AS sept15_age,
                    cy.caphit,
                    cy.base_salary,
                    cy.signing_bonus,
                    COALESCE(cy.base_salary,0) + COALESCE(cy.signing_bonus,0) as total_salary,
                    cy.performance_bonus,
                    cy.clause,
                    cy.clause_details,
                    cy.is_boughtout,
                    cy.minors_salary,
                    st.staff_id,
                    sb.first_name || ' ' || sb.last_name AS signing_gm,
                    sb.staff_slug
                FROM contract_terms ct
                JOIN player p
                    ON p.player_id = ct.player_id
                LEFT JOIN contract_years cy
                    ON cy.contract_id = ct.contract_id
                LEFT JOIN staff_tenures st 
                    ON st.team = ct.signing_team
                    AND ct.signing_date BETWEEN st.start_date AND COALESCE(st.end_date, NOW())
                    AND st.role = 'general_manager'
                LEFT JOIN staff_bios sb
                    ON st.staff_id = sb.staff_id
            ),

        transactions AS (
            SELECT
                t.*
            FROM transactions t
            WHERE t.player_id = (SELECT player_id FROM player)
        )
    
    SELECT json_build_object(
        'player', (SELECT row_to_json(player) FROM player),
        'contracts', (SELECT json_agg(contracts) FROM contracts),
        'transactions', (SELECT json_agg(transactions) FROM transactions)
    ) AS data;`

    return result[0].data
}



export const updatePlayerStatus = async ({
  newStatus,
  playerId
}: { newStatus: PlayerStatusTypes | null; playerId: number }) => {
  const result = await sql`
    UPDATE players SET status = ${newStatus} WHERE player_id = ${playerId}
  `;
  return result[0];
};

export const updatePlayerTeam = async ({
  newTeam,
  playerId
}: { newTeam: TeamSlugs | null; playerId: number }) => {
  const result = await sql`
    UPDATE players SET team = ${newTeam} WHERE player_id = ${playerId}
  `;
  return result[0];
};