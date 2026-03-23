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