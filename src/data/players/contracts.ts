import { ClauseTypes, TeamTricodes } from "@/lib/types/global-hockey-types";
import { sql } from "../db";

interface IInsertContractYears {
  contract_id: string;
  player_id: number;
  season: number;
  caphit: number;
  base_salary: number;
  signing_bonus: number;
  performance_bonus: number;
  clause: ClauseTypes;
  clause_details: string;
  is_boughtout: boolean;
  minors_salary: number;
}

export async function insertContractYears({
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
}: IInsertContractYears) {
  await sql`
    INSERT INTO contract_years (
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
      minors_salary
    )
    VALUES (
      ${contract_id},
      ${player_id},
      ${season},
      ${caphit},
      ${base_salary},
      ${signing_bonus},
      ${performance_bonus},
      ${clause},
      ${clause_details},
      ${is_boughtout},
      ${minors_salary}
    )
  `
}
interface IInsertTransaction {
    transaction_id: string;
    player_id: number
    team_tricode: TeamTricodes
    type: string;
    date: Date
    notes: string
}
export async function insertTransaction({
  transaction_id,
  player_id,
  team_tricode,
  type,
  date,
  notes,
}: IInsertTransaction) {
  await sql`
    INSERT INTO transactions (
      transaction_id,
      player_id,
      tricode,
      type,
      date,
      notes
    )
    VALUES (
      ${transaction_id},
      ${player_id},
      ${team_tricode},
      ${type},
      ${date},
      ${notes}
    )
  `
}


/**
 * =======================================================================
 *  DELETE CONTRACT DATA
 * =======================================================================
 */


/**
 * 
 * @param contract_id 
 * @param season 
 * @returns 
 */

export async function deleteContractYear(
  contract_id: string,
  season: number
) {
  await sql`
    DELETE FROM contract_years
    WHERE contract_id = ${contract_id}
      AND season = ${season}
  `
}
/**
 * deletes every year of the respective contract to the contract_id
 * @param contract_id 
 * @returns 
 */
export async function deleteAllContractYears(contract_id: string) {
  await sql`
    DELETE FROM contract_years
    WHERE contract_id = ${contract_id}
  `
}/**
 *  deletes transaction relating to the transaction id
 * @param transaction_id the id relating to the transaction to being deleted, will be used for deleting transaction info like buyouts, draftpicks, trades, contracts, waivers, loans etc. 
 * @returns query object
 */ 
export async function deleteTransaction(transaction_id: string) {
  await sql`
    DELETE FROM transactions
    WHERE transaction_id = ${transaction_id}
  `
}

