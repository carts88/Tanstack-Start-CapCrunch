import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function addUUIDtoArray<T>(array: T[]) {
  return array.map((item) => ({
    uuid: crypto.randomUUID(),
    ...item
  }));
}