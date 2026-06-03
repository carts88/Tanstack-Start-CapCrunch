import { sql } from "../db"

interface ISearchBarParams {
    search: string
}

export async function getSearchData({search}: ISearchBarParams) {
    const searchTerm = `%${search}%`
    const rows = await sql`
        WITH league_players AS (
            SELECT 
                'player' AS type,
                player_id,
                first_name || ' ' || last_name AS full_name,
                team,
                position,
                player_slug
                FROM players
                WHERE 
                first_name ILIKE ${searchTerm}
                OR last_name ILIKE ${searchTerm}
                OR full_name ILIKE ${searchTerm}
                OR team ILIKE ${searchTerm}
                LIMIT 10
            ),
            
            league_staff AS (
                SELECT 
                'staff' AS type,
                sb.staff_id,
                sb.first_name || ' ' || sb.last_name AS full_name,
                sb.staff_slug,
                st.team,
                st.role
                FROM staff_bios sb
                LEFT JOIN staff_tenures st 
                    ON st.staff_id = sb.staff_id AND st.end_date IS NULL
                WHERE 
                sb.first_name ILIKE ${searchTerm}
                OR sb.last_name ILIKE ${searchTerm}
                LIMIT 10
            )

            SELECT json_build_object(
                'league_players', (SELECT json_agg(league_players) FROM league_players),
                'league_staff', (SELECT json_agg(league_staff) FROM league_staff)
            ) AS data
        `
        return rows[0]
}