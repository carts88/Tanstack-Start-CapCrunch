export function formatCurrency(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}


export function formatSeason(year: number){
    const nextYear = `${year + 1}`
    return `${year}-${nextYear.slice(2,4)}`
}