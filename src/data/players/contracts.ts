import { ContractTypes, TeamSlugs } from "@/lib/types/global-hockey-types";
import { sql } from "../db";
import { ContractFormValues } from "@/components/manage-contract/contract-grid.types";


export function insertContractYears(
  contractId: string,
  playerId: number,
  contractYears: ContractFormValues['years']
) {
  if (contractYears.length === 0) {
    throw new Error(
      "You're trying to insert contract years, yet contractYears is empty."
    );
  }

  const values: unknown[] = [];
  const placeholders: string[] = [];

  contractYears.forEach((year, index) => {
    const offset = index * 10;

    placeholders.push(
      `(
        $${offset + 1},
        $${offset + 2},
        $${offset + 3},
        $${offset + 4},
        $${offset + 5},
        $${offset + 6},
        $${offset + 7},
        $${offset + 8},
        $${offset + 9},
        $${offset + 10}
      )`
    );

    values.push(
      contractId,
      playerId,
      year.season,
      year.capHit,
      year.baseSalary,
      year.signingBonus,
      year.performanceBonus,
      year.clause,
      year.clauseInfo,
      year.minorsSalary
    );
  });

  const query = `
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
      minors_salary
    )
    VALUES
    ${placeholders.join(",")}
  `;

  return sql.query(query, values);
}



interface IInsertTransaction {
    transactionId: string;
    playerId: number
    team: string
    type: string;
    date: Date
    notes: string
}
export function insertTransaction({
  transactionId,
  playerId,
  team,
  type,
  date,
  notes,
}: IInsertTransaction) {
  return sql`
    INSERT INTO transactions (
      transaction_id,
      player_id,
      team,
      type,
      date,
      notes
    )
    VALUES (
      ${transactionId},
      ${playerId},
      ${team},
      ${type},
      ${date},
      ${notes}
    )
  `
}


interface IInsertContractInfo {
    contractId: string;
    playerId: number
    team: string
    type: string;
    date: Date
}
export function insertContractInfo({
  contractId,
  playerId,
  team,
  type,
  date,
}: IInsertContractInfo) {
  return sql`
    INSERT INTO contract_terms (
      contract_id,
      player_id,
      signing_team,
      contract_type,
      signing_date
    )
    VALUES (
      ${contractId},
      ${playerId},
      ${team},
      ${type},
      ${date}
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
export function deleteAllContractYears(contract_id: string) {
  return sql`DELETE FROM contract_years WHERE contract_id = ${contract_id}`;
}

export function deleteTransaction(transaction_id: string) {  // renamed for clarity
  return sql`DELETE FROM transactions WHERE transaction_id = ${transaction_id}`;
}

export function deleteContractInfo(contractId: string) {
  return sql`DELETE FROM contract_terms WHERE contract_id = ${contractId}`;
}


// ===========================================================
// ===========================================================
// ===========================================================
interface IUpdateContractInfo {
  contractId: number;
  signingDate: Date | string
  signingTeam: TeamSlugs
  contractType: ContractTypes
  note: string
}

export function updateContractInfo(
  {
    contractId,
    signingDate,
    signingTeam,
    contractType,
    note
  }: IUpdateContractInfo
) {
  return sql`
    UPDATE contract_terms
      SET signing_date = ${signingDate}
      SET signing_team = ${signingTeam}
      SET contract_type = ${contractType}
      SET note = ${note}
    WHERE contract_id ${contractId}
  `
}