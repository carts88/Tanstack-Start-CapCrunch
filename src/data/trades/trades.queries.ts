import { sql } from "../db"

interface IGetTradeTree {
    trade_id: string
}
export const test_id = "2023-06-06-CBJ-LAK-PHI"


export async function getTradeTree({trade_id} :  IGetTradeTree) {
    const rows = await sql`
        WITH RECURSIVE all_assets AS (

                SELECT
                    trade_id,
                    'PLAYER' AS asset_type,
                    player_id::text AS asset_id
                FROM player_assets

                UNION ALL

                SELECT
                    trade_id,
                    'PICK' AS asset_type,
                    pick_id AS asset_id
                FROM draft_pick_assets
            ),

            enriched_assets AS (

                SELECT
                    aa.trade_id,
                    aa.asset_type,
                    aa.asset_id,

                    -- PLAYER FIELDS
                    p.first_name,
                    p.last_name,
                    p.player_slug,

                    -- PICK FIELDS
                    dp.draft_year,
                    dp.draft_round,
                    dp.original_owner,
                    dp.drafted_player_id,

                    -- drafted player enrichment
                    drafted.first_name AS drafted_first_name,
                    drafted.last_name AS drafted_last_name,
                    drafted.player_slug AS drafted_player_slug

                FROM all_assets aa

                LEFT JOIN players p
                    ON aa.asset_type = 'PLAYER'
                AND p.player_id::text = aa.asset_id

                LEFT JOIN draft_picks dp
                    ON aa.asset_type = 'PICK'
                AND dp.pick_id = aa.asset_id

                LEFT JOIN players drafted
                    ON dp.drafted_player_id = drafted.player_id
            ),

            trade_tree AS (

                -- =========================
                -- ROOT NODES (starting trade)
                -- =========================
                SELECT
                    NULL::text AS parent_trade_id,

                    ea.trade_id,
                    ea.trade_id AS root_trade_id,

                    ea.asset_type,
                    ea.asset_id,

                    ea.first_name,
                    ea.last_name,
                    ea.player_slug,

                    ea.draft_year,
                    ea.draft_round,
                    ea.original_owner,
                    ea.drafted_player_id,
                    ea.drafted_first_name,
                    ea.drafted_last_name,
                    ea.drafted_player_slug,

                    ti.date,
                    0 AS depth

                FROM enriched_assets ea
                JOIN trade_info ti
                    ON ti.trade_id = ea.trade_id

                WHERE ea.trade_id = ${trade_id}

                UNION ALL

                -- =========================
                -- RECURSIVE STEP
                -- =========================
                SELECT
                    tt.trade_id AS parent_trade_id,

                    ea.trade_id,
                    tt.root_trade_id,

                    ea.asset_type,
                    ea.asset_id,

                    ea.first_name,
                    ea.last_name,
                    ea.player_slug,

                    ea.draft_year,
                    ea.draft_round,
                    ea.original_owner,
                    ea.drafted_player_id,
                    ea.drafted_first_name,
                    ea.drafted_last_name,
                    ea.drafted_player_slug,

                    ti2.date,
                    tt.depth + 1

                FROM trade_tree tt

                JOIN enriched_assets ea
                    ON ea.asset_type = tt.asset_type
                AND ea.asset_id = tt.asset_id

                JOIN trade_info ti2
                    ON ti2.trade_id = ea.trade_id

                -- prevents looping on same trade
                WHERE ea.trade_id <> tt.trade_id

                -- ensures forward-only traversal in time
                AND ti2.date > tt.date
            )

            SELECT *
            FROM trade_tree
            ORDER BY root_trade_id, depth, date;
    `

    return rows
}


export interface ILimitOffset {
    limit: number
    offset: number
}

export async function getTrades({
    limit = 75,
    offset = 1
} :  ILimitOffset) {
    const rows = `
        WITH trades AS (
            SELECT 
                ti.trade_id,
                ti.date,
                ti.notes,
                ti.is_confirmed
            FROM trade_info ti
            ORDER BY ti.date DESC
            LIMIT ${limit}
            OFFSET ${offset}
        ),

        trade_assets AS (
            -- Draft picks
            SELECT 
                trade_id,
                pick_id,
                NULL::int AS player_id,
                acquired_by,
                traded_by,
                'draft_pick' AS asset_type
            FROM draft_pick_assets
            WHERE trade_id IN (SELECT trade_id FROM trades)

            UNION ALL

            -- Players
            SELECT 
                trade_id,
                NULL::text AS pick_id,
                player_id,
                acquired_by,
                traded_by,
                'player' AS asset_type
            FROM player_assets
            WHERE trade_id IN (SELECT trade_id FROM trades)
        ),

        enriched_assets AS (

            -- Draft pick assets
            SELECT
                ta.trade_id,
                ta.asset_type,
                dp.pick_id,
                ta.traded_by,
                ta.acquired_by,
                dp.draft_round,
                dp.draft_year,
                dp.draft_overall,
                dp.original_owner,
                COALESCE(ta.player_id, dp.drafted_player_id) AS player_id,
                p.full_name,
                p.birth_date,
                p.player_slug,
                p.shoots_catches,
                p.position
            FROM trade_assets ta
            LEFT JOIN draft_picks dp
                ON dp.pick_id = ta.pick_id
            LEFT JOIN players p
                ON p.player_id = COALESCE(ta.player_id, dp.drafted_player_id)
            WHERE ta.asset_type = 'draft_pick'

            UNION ALL

            -- Player assets
            SELECT
                ta.trade_id,
                ta.asset_type,
                NULL AS pick_id,
                ta.traded_by,
                ta.acquired_by,
                NULL AS draft_round,
                NULL AS draft_year,
                NULL AS draft_overall,
                NULL AS original_owner,
                ta.player_id,
                p.full_name,
                p.birth_date,
                p.player_slug,
                p.shoots_catches,
                p.position
            FROM trade_assets ta
            LEFT JOIN players p
                ON p.player_id = ta.player_id
            WHERE ta.asset_type = 'player'
        )

        SELECT
            ta.trade_id,
            ta.asset_type,
            COALESCE(dp_pick.pick_id, dp_player.pick_id) AS pick_id,
            ta.traded_by,
            ta.acquired_by,
            COALESCE(dp_pick.draft_round, dp_player.draft_round) AS draft_round,
            COALESCE(dp_pick.draft_year, dp_player.draft_year) AS draft_year,
            COALESCE(dp_pick.draft_overall, dp_player.draft_overall) AS draft_overall,
            COALESCE(dp_pick.original_owner, dp_player.original_owner) AS original_owner,
            COALESCE(ta.player_id, dp_pick.drafted_player_id) AS player_id,
            p.full_name,
            p.birth_date,
            p.player_slug,
            p.shoots_catches,
            p.position
        FROM trade_assets ta

        -- draft-pick asset lookup
        LEFT JOIN draft_picks dp_pick
            ON dp_pick.pick_id = ta.pick_id

        -- player -> draft info lookup
        LEFT JOIN draft_picks dp_player
            ON dp_player.drafted_player_id = ta.player_id

        LEFT JOIN players p
            ON p.player_id = COALESCE(
                ta.player_id,
                dp_pick.drafted_player_id
            )
    `
    return rows
}