import { ContractCard } from "./contract-card";


const dummyPerformance = {
  gamesPlayed: 78,
  goals: 24,
  assists: 41,
  points: 65,                    // goals + assists
  toiPerGame: "19:42",
  costPerPoint: "$4,923",        // formatted as string
};

export const ContractHistory = ({
  contracts,
}: {
  contracts: any[];
}) => (
  <div className="flex flex-col gap-4">
    {contracts.map((c, i) => (
      <ContractCard
        key={i}
        contract={c}
        performance={dummyPerformance}
      />
    ))}
  </div>
);