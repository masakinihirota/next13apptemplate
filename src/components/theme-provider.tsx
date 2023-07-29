"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

/**
 * テーマを提供するためのコンポーネント。
 * @module ThemeProvider
 * @param {ThemeProviderProps} props - テーマプロバイダーのプロパティ。
 * @param {React.ReactNode} props.children - 子要素。
 * @return {JSX.Element} テーマプロバイダーを含む React 要素。
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
