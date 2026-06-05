import { sql } from "../db"


interface IGetDraftByYear {
    year: number
}

export async function getDraftByYear({
    year
} :  IGetDraftByYear) {
    const rows = sql`
        SELECT 
            dp.pick_id
            , dp.draft_year
            , dp.draft_round
            , dp.draft_overall
            , dp.original_owner
            , dp.current_owner
            , p.full_name  
            , p.position  
            , p.full_name  
            , p.player_slug
        FROM draft_picks dp
        LEFT JOIN players p ON p.player_id = dp.drafted_player_id
        WHERE dp.draft_year = ${year}
        ORDER BY dp.draft_overall
    `
    return rows
}