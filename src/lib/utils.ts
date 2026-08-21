import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names cleanly with Tailwind merge resolution.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a string value safely or returns a fallback.
 */
export function safeString(value: string | undefined | null, fallback: string = ""): string {
  return value?.trim() || fallback;
}
