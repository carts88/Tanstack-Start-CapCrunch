interface PlayerInfo {
  player_id: number;
  first_name: string;
  last_name: string;
  position: string;
  status: string;
  age_at_sept15: number;
  position_group: string;
  cap_calculation_group: string;
  type: string;
  draft_date: string;
  notes: string;
  height_in_inches: number;
  weight_in_pounds: number;
  birth_country: string;
  birth_date: string;
  shoots_catches: string;
  draft_overall: number;
  draft_year: number;
  original_owner: string;
  current_owner: string;
}

interface ContractYear {
  season: number;
  contract_id: string;
  caphit: number;
  base_salary: number;
  signing_bonus: number;
  performance_bonus: number;
  clause: string | null;
  clause_details: string | null;
  age: string;
  retained_caphit: number | null;
  retained_team: string | null;
  [key: string]: any;
}

interface Contract {
  contract_id: string;
  contractYears: ContractYear[];
}

interface TransformedPlayer extends PlayerInfo {
  contracts: Contract[];
}

interface RawPlayer extends ContractYear, PlayerInfo {
  contract_id: string;
}

export type GroupedPlayers = Record<
  string,
  Record<string, TransformedPlayer[]>
>;

export function transformPlayerContracts(
  flatData: RawPlayer[]
): GroupedPlayers {
 
  const playersMap = new Map<
    number,
    TransformedPlayer & {
      contractsMap: Map<string, Contract>;
    }
  >();

  for (const item of flatData) {
    let player = playersMap.get(item.player_id);

    if (!player) {
      player = {
        player_id: item.player_id,
        first_name: item.first_name,
        last_name: item.last_name,
        position: item.position,
        status: item.status,
        age_at_sept15: item.age_at_sept15,
        position_group: item.position_group,
        cap_calculation_group: item.cap_calculation_group,
        type: item.type,
        draft_date: item.draft_date,
        notes: item.notes,
        height_in_inches: item.height_in_inches,
        weight_in_pounds: item.weight_in_pounds,
        birth_country: item.birth_country,
        birth_date: item.birth_date,
        shoots_catches: item.shoots_catches,
        draft_overall: item.draft_overall,
        draft_year: item.draft_year,
        original_owner: item.original_owner,
        current_owner: item.current_owner,
        contracts: [],
        contractsMap: new Map(),
      };

      playersMap.set(item.player_id, player);
    }

    let contract = player.contractsMap.get(item.contract_id);

    if (!contract) {
      contract = {
        contract_id: item.contract_id,
        contractYears: [],
      };

      player.contractsMap.set(item.contract_id, contract);
      player.contracts.push(contract);
    }

    contract.contractYears.push({
      season: item.season,
      contract_id: item.contract_id,
      caphit: item.caphit,
      base_salary: item.base_salary,
      signing_bonus: item.signing_bonus,
      performance_bonus: item.performance_bonus,
      clause: item.clause,
      clause_details: item.clause_details,
      age: item.age,
      retained_caphit: item.retained_caphit,
      retained_team: item.retained_team,
    });
  }

  const players: TransformedPlayer[] = Array.from(playersMap.values()).map(
    ({ contractsMap, ...player }) => ({
      ...player,
      contracts: player.contracts.map(contract => ({
        ...contract,
        contractYears: contract.contractYears.sort(
          (a, b) => a.season - b.season
        ),
      })),
    })
  );

  return players.reduce((acc, player) => {
    const capGroup = player.status.toLowerCase();
    const positionGroup = player.position_group.toLowerCase();

    if (!acc[capGroup]) {
      acc[capGroup] = {};
    }

    if (!acc[capGroup][positionGroup]) {
      acc[capGroup][positionGroup] = [];
    }

    acc[capGroup][positionGroup].push(player);

    return acc;
  }, {} as GroupedPlayers);
}



export interface ITeamOutlook {
    "season": null,
    "cap_calculation_group": "ACTIVE",
    "position_group": "G",
    "status": "NHL",
    "acquisition_type": "DRAFTED",
    "player_count": 3,
    "caphit": 0
}



export function transformPlayerOutlooks() {

}