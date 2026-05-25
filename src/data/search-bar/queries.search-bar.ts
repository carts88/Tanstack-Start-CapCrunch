import { pool } from "../db"

interface ISearchBarParams {
    search: string
}

export async function getPlayersSearch({ search }: ISearchBarParams) {
    const searchTerm = `%${search}%`;

    const query = await pool.query(
        `SELECT 
            player_id,
            first_name,
            last_name,
            player_slug
            
        FROM bios 
        WHERE 
            first_name ILIKE $1 
            OR last_name ILIKE $1 
            OR player_slug ILIKE $1
        LIMIT 10`,
        [searchTerm]
    );

    console.log("Player Search Query:", query.rows)
    return query.rows;
}

export async function getStaffSearch({ search }: ISearchBarParams) {
    const searchTerm = `%${search}%`;

    const query = await pool.query(
        `
        SELECT 
            staff_id,
            staff_slug,
            first_name,
            last_name
        FROM staff_bios
        WHERE 
            first_name ILIKE $1 
            OR last_name ILIKE $1 
            OR staff_slug ILIKE $1
        LIMIT 10`,
        [searchTerm]
    );

    return query.rows;
}