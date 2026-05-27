import { pool } from "../db";


interface IInsertContractYears {
    // Add your props here
}

export async function insertContractYears({

} :  IInsertContractYears) {
    
    const query  = `
    INSERT INTO contract_years  (
        contract_id, 
        player_id, 
        season, 
        caphit, 
        base_salary, 
        signing_bonus, 
        performance_bonus, 
        clause, 
        clause_details, 
        is_boughtout, 
        minors_salary, 
    ) 
    VALUES (
        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,      -- clause_details
        $10,
        $11,
    );
    `

}