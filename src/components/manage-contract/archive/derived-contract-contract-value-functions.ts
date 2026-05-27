
export interface ICreateContractNote {
  signingDate: string;
  signingTeam: string;
  fullName: string;
  totalContractValue: number; // in millions
  contractLength: number;     // years
}

export function createContractNote({
  signingDate,
  signingTeam,
  fullName,
  totalContractValue,
  contractLength,
}: ICreateContractNote) {
  const templates = [
    `The ${signingTeam} have secured ${fullName} with a new ${contractLength}-year contract worth $${totalContractValue} million, signed ${signingDate}.`,

    `The ${signingTeam} have signed ${fullName} to a ${contractLength}-year, $${totalContractValue} million contract, effective ${signingDate}.`,

    `${fullName} has signed a ${contractLength}-year contract with the ${signingTeam} valued at $${totalContractValue} million on ${signingDate}.`,

    `The ${signingTeam} have agreed to terms with ${fullName} on a ${contractLength}-year deal worth $${totalContractValue} million, signed ${signingDate}.`,

    `${fullName} has agreed to a ${contractLength}-year, $${totalContractValue} million contract with the ${signingTeam}, signed on ${signingDate}.`,

    `The ${signingTeam} have signed ${fullName} to a ${contractLength}-year contract worth $${totalContractValue} million as of ${signingDate}.`,

    `${fullName} signs ${contractLength}-year, $${totalContractValue} million contract with the ${signingTeam} on ${signingDate}.`,

    `The ${signingTeam} and ${fullName} have reached agreement on a ${contractLength}-year contract valued at $${totalContractValue} million, signed ${signingDate}.`,
  ];

  // Randomly select one template
  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
}


