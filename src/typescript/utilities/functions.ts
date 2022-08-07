
/**
 * 
 * @param hour A number between 0 and 23
 * @param split The number of separations into which an hour should be divided
 * @returns An array with the hours and minutes into which they are divided
 * 
 */
export function hourSeparator(hour: number, split: number): string[] {

  if (hour < 0 || hour > 23) throw new Error('invalid hour')

  const a = 60 / split

  return Array(split).fill('').map(((s, i) => {
    const calc = a * i
    return `${hour > 9 ? hour : '0' + hour}:${calc > 9 ? calc : '0' + calc}`
  }))
}


