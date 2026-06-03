/**
 * 
 * @param value the value you are checking if it is valid
 * @param validValues the values you want the checked value to be
 * @returns boolean, whether it is valid or not
 */
export const isValidEnumValue = <T extends readonly string[]>(
  value: string,
  validValues: T
): value is T[number] => {
  return validValues.includes(value as T[number]);
};
