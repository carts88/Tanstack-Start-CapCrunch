import { groupMap, pickFirst } from "@/lib/mapping.utils";
import { formatCurrency, formatDate } from "@/lib/utils/formatters";

export interface IRawContract {
    player_id: number;
    contract_id: string;
    signing_date: string;
    signing_team: string;
    contract_type: string;
    season: number | null;
    caphit: number | null;
    base_salary: number | null;
    signing_bonus: number | null;
    total_salary: number | null;
    performance_bonus: number | null;
    clause: string | null;
    clause_details: string | null;
    is_boughtout: boolean | null;
    minors_salary: number | null;
    sept15_age: number;
    signing_gm: string | null;
    staff_slug: string | null;
}

interface ITransformContracts {
    rawContracts: IRawContract[];
}

export interface IContract {
    contractId: string;
    playerId: number;
    signingDate: string;
    signingTeam: string;
    contractType: string;
    signingGm?: string | null;
    signingGmSlug?: string | null;
    contractYears: Array<{
        season: number | null;
        sept15Age: number;
        caphit: string;
        baseSalary: string;
        signingBonus: string;
        totalSalary: string;
        performanceBonus: string;
        minorsSalary: string;
        clause: string | null;
        clauseInfo: string | null;
    }>;
}

export const transformContracts = ({
    rawContracts,
}: ITransformContracts): IContract[] => {

    if (!rawContracts) return []

    // First group by contract_id
    const groupedByContract = groupMap(
        rawContracts,
        c => c.contract_id,
        group => {
            const contract = pickFirst(group);

            // Group years by season, then convert to sorted array
            const yearsMap = groupMap(
                group,
                c => c.season ?? 0,
                seasonGroup => {
                    const year = pickFirst(seasonGroup);
                    return {
                        season: year.season,
                        sept15Age: year.sept15_age,
                        caphit: formatCurrency(year.caphit || 0, 0),
                        baseSalary: formatCurrency(year.base_salary || 0, 0),
                        signingBonus: formatCurrency(year.signing_bonus || 0, 0),
                        totalSalary: formatCurrency(year.total_salary || 0, 0),
                        performanceBonus: formatCurrency(year.performance_bonus || 0, 0),
                        minorsSalary: formatCurrency(year.minors_salary || 0, 0),
                        clause: year.clause,
                        clauseInfo: year.clause_details,
                    };
                }
            );

            // Convert to array and sort by season (year)
            const contractYears = Object.values(yearsMap).sort((a, b) => {
                return (a.season ?? 0) - (b.season ?? 0);
            });

            return {
                contractId: contract.contract_id,
                playerId: contract.player_id,
                signingDate: formatDate(contract.signing_date),
                signingTeam: contract.signing_team,
                contractType: contract.contract_type,
                signingGm: contract.signing_gm,
                signingGmSlug: contract.staff_slug,
                contractYears,
            };
        }
    );

    // Convert contracts to array and sort by contract_id
    return Object.values(groupedByContract).sort((a, b) => {
        return a.contractId.localeCompare(b.contractId);
    });
};

