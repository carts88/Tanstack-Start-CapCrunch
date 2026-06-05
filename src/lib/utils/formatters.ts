export function formatCurrency(price: number, decimals = 0) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(price)
}


export function formatSeason(year: number){
    const nextYear = `${year + 1}`
    return `${year}-${nextYear.slice(2,4)}`
}


/**
 * Converts height from inches to formatted metric + imperial strings
 * @param inches - Height in inches
 * @returns [metric, imperial] e.g. ["178 cm (1.78 m)", "5'10\""]
 */
export function formatHeight(inches: number): [string, string] {
  if (typeof inches !== 'number' || isNaN(inches) || inches < 0) {
    return ["Invalid height", "Invalid height"];
  }

  // Metric
  const cm = Math.round(inches * 2.54);
  const metric = `${cm} cm`;

  // Imperial
  const feet = Math.floor(inches / 12);
  const remainingInches = Math.round(inches % 12);
  
  let imperial: string;
  if (feet === 0) {
    imperial = `${remainingInches}"`;
  } else if (remainingInches === 0) {
    imperial = `${feet}'`;
  } else {
    imperial = `${feet}'${remainingInches}"`;
  }

  return [metric, imperial];
}

/**
 * Converts weight from pounds to formatted metric + imperial strings
 * @param pounds - Weight in pounds
 * @returns [metric, imperial] e.g. ["79.4 kg", "175 lbs"]
 */
export function formatWeight(pounds: number): [string, string] {
  if (typeof pounds !== 'number' || isNaN(pounds) || pounds < 0) {
    return ["Invalid weight", "Invalid weight"];
  }

  // Metric (kg)
  const kg = (pounds * 0.45359237).toFixed(1);
  const metric = `${kg} kg`;

  // Imperial
  const imperial = `${Math.round(pounds)} lbs`;

  return [metric, imperial];
}


export function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}


const defaultDateOptions: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
};

export function formatDate(
    date: string | Date | null | undefined,
    options: Intl.DateTimeFormatOptions = defaultDateOptions,
    locale = "en-US"
): string {
    if (!date) return "-";

    let d: Date;

    if (typeof date === "string") {
        // Handle YYYY-MM-DD format safely (most common case)
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            const [year, month, day] = date.split("-").map(Number);
            d = new Date(year, month - 1, day);           // Local date constructor
        } else {
            d = new Date(date);
        }
    } else {
        d = new Date(date);
    }

    if (isNaN(d.getTime())) {
        return "-"; // invalid date
    }

    return new Intl.DateTimeFormat(locale, options).format(d);
}