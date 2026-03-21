import type { ExpiryStatus } from "@/lib/types/global-hockey-types";
interface IExpiryStatusPill {
    status: ExpiryStatus
}


export const mapStatusColors = (status: ExpiryStatus) => {
    const baseClass = 'transition-all duration-200 ';
    switch (status) {
      case 'UFA':
      case 'UFA NO QO':
      case 'UFA G6':
        return `${baseClass} ufa`;
      case 'RFA':
        return `${baseClass} rfa`;
      case '10.2(c)':
        return `${baseClass} ten-two-c`;
      case 'ARB':
        return `${baseClass} arb`;
      default:
        return '';
    }
  };

export const ExpiryStatusPill = ({status} :  IExpiryStatusPill) => {
    return(
    <span className={`flex justify-between items-center px-4 w-max whitespace-nowrap rounded-md font-medium text-sm ${mapStatusColors(status)}`}>
          {status}
        </span>

    )
}