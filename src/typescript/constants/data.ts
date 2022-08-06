import { hourSeparator } from "../utilities/functions";

export const weekdays: Weekday[] = [
  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"
]

export const defaultNumberOfSeparators: number = 2;

export const defaultTimes: string[] = Array(12).fill(1)
  .map((n, i) => 1 + i)
  .reduce<string[]>((acc, h) => [...acc, ...hourSeparator(h, defaultNumberOfSeparators)]
    , [])