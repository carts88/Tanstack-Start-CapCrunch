import { convertKeysToCamelCase } from "@/lib/mapping.utils";
import { getPlayer } from "./single-player.queries";
import { transformContracts } from "./utils";
import { formatHeight, formatWeight } from "@/lib/utils/formatters";
import { insertContractInfo, insertContractYears, insertTransaction } from "./contracts";
import { ContractFormValues } from "@/components/manage-contract/contract-grid.types";
import { sql } from "../db";

interface IGetPlayer {
    player_slug: string;
}

export const getPlayerData = async ({
    player_slug,
}: IGetPlayer) => {
    const data = await getPlayer({ player_slug });

    const {
        player,
        contracts,
        transactions,
    } = data;

    const transformedContracts = transformContracts({
        rawContracts: contracts,
    });

    const transformedPlayer = {
        fullName: player.first_name + " " + player.last_name,
        height: formatHeight(player.height_in_inches),
        weight: formatWeight(player.weight_in_lbs),
        charity: "N/A",
        headshotUrl: `https://assets.nhle.com/mugs/nhl/latest/${player.player_id}.png`,
        ...player,

    }

    return {
        playerInfo: convertKeysToCamelCase(transformedPlayer),
        contracts: transformedContracts ,
        transactions,
    };
};


interface CreateContractInput extends ContractFormValues {
  playerId: number;
  contractId: string;
}
export async function createContract(data: CreateContractInput) {
  // console.log(data.years)
  await sql.transaction([
    insertContractYears(
      data.contractId,
      data.playerId,
      data.years
    ),
    insertTransaction({
      transactionId: data.contractId,
      playerId: data.playerId,
      team: data.signingTeam,
      type: data.contractType,
      date: data.signingDate,
      notes: ""
    }),
    insertContractInfo({
      contractId: data.contractId,
      playerId: data.playerId,
      team: data.signingTeam,
      type: data.contractType,
      date: data.signingDate
    }),
  ]);
}