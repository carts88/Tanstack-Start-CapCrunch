import pool from '@/data/db';

interface IGetPlayerByTeam {
    season: number;
    team: string;
}

export async function GetPlayerByTeam({season, team} : IGetPlayerByTeam) {
    const query = await pool.query(
        `SELECT 
        FROM table_name
        /* JOIN other_table ON ... */
        WHERE condition
        ORDER BY column ASC
        LIMIT $1`
        , [season, team]
    );

    return query.rows;
}
