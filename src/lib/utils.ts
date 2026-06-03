import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { domToPng } from "modern-screenshot";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function addUUIDtoArray<T>(array: T[]) {
  return array.map((item) => ({
    uuid: crypto.randomUUID(),
    ...item
  }));
}


export const takeScreenshot = async (
  id: string,
  img_name: string
) => {
  const element = document.getElementById(id);

  if (!element) return;

  try {
    const dataUrl = await domToPng(element);

    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${img_name}.png`;
    a.click();

  } catch (e) {
    console.error("Screenshot failed", e);
  }
};


export const isValidEnumValue = <T extends readonly string[]>(
  value: string,
  validValues: T
): value is T[number] => {
  return validValues.includes(value as T[number]);
};
