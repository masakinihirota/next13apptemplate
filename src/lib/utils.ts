import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS のクラス名を生成する関数。
 * @param {TemplateStringsArray} inputs - テンプレートリテラルの文字列配列。
 * @return {string} 生成されたクラス名。
 * @example
 * const className = tw`text-red-500 bg-blue-200`;
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
