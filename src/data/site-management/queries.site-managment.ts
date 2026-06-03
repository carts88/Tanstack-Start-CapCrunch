import { Seasons } from "@/lib/types/global-hockey-types";
import { sql } from "../db";

interface ISetTrainingCampRosters {
    season: Seasons;
}

export async function setTrainingCampRosters({ 
    season
}: ISetTrainingCampRosters) {
    await sql.query(`
        UPDATE bios b
        SET status = 'NHL'
        FROM contract_years cy
        WHERE cy.player_id = b.player_id
          AND cy.season = $1
          AND cy.is_boughtout = false
          AND cy.structure = 'two-way'
    `, [season]);
}


export async function setFreeAgents(season: Seasons) {
    const query = await sql.query(`
        UPDATE bios b
        SET 
            status = 'FA',
            team = NULL
        WHERE NOT EXISTS (
            SELECT 1
            FROM contract_years cy
            WHERE cy.player_id = b.player_id
              AND cy.season = $1
              AND cy.is_boughtout = false
        )
    `, [season]);

    return query;
}