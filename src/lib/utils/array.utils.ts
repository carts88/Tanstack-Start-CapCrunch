// # GET FUNCTIONS

export function getObjectOfArrayByKey<T, K extends keyof T>(
    array: T[],
    key: K,
    value: T[K]
): T {
    const result = array.find((item) => item[key] === value);
    if (!result) {
        throw new Error(`No item found with ${String(key)} = ${value}`);
    }
    return result;
}

// # MATH FUNCTIONS


export function sumArrayProperty<T extends Record<keyof T, number>>(
  array: T[],
  key: keyof T
) {
  return array.reduce((sum, item) => sum + item[key], 0);
}

export function averageArrayProperty<T extends Record<keyof T, number>>(
  array: T[],
  key: keyof T
) {
    const sumOfArray = array.reduce((sum, item) => sum + item[key], 0)
    return sumOfArray / array.length;
}


// # GET MAX

export function getMaxByKey<T extends Record<string, any>>(
  array: T[],
  key: keyof T
): number  {
  if (array.length === 0) return 0;

  return Math.max(
    ...array.map(item => {
      const value = item[key];
      if (typeof value !== 'number') {
        throw new Error(`Property "${String(key)}" is not a number`);
      }
      return value;
    })
  );
}


export const mergeObject = <T>(obj: T, overrides: Partial<T>) => {
  
  return {
    ...obj,
    ...overrides
  }
}