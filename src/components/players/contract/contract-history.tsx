import { ContractCard } from "./contract-card";

export const ContractHistory = ({
  contracts,
  teamPrimary,
  teamSecondary,
}: {
  contracts: any[];
  teamPrimary?: string;
  teamSecondary?: string;
}) => (
  <div className="flex flex-col gap-4">
    {contracts.map((c, i) => (
      <ContractCard
        key={i}
        contract={c}
          currentSeason="2025–26"
  performance={{ gamesPlayed: 246, goals: 72, assists: 118, toiPerGame: "20:14" }}

        teamPrimary={teamPrimary}
        teamSecondary={teamSecondary}
      />
    ))}
  </div>
);