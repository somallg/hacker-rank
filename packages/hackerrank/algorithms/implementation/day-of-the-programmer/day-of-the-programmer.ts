/**
 * @url https://www.hackerrank.com/challenges/day-of-the-programmer/problem
 */

export function dayOfTheProgrammer(y: number): string {
  if (y === 1918) {
    return '26.09.1918';
  }

  const calendar: Calendar =
    y < 1919 ? JulianCalendar(y) : GregorianCalendar(y);

  return calendar.isLeapYear() ? `12.09.${y}` : `13.09.${y}`;
}

export interface Calendar {
  isLeapYear(): boolean;
}

// tslint:disable:variable-name
const JulianCalendar: (y: number) => Calendar = (y: number): Calendar => ({
  isLeapYear: (): boolean => y % 4 === 0
});

// tslint:disable:variable-name
const GregorianCalendar: (y: number) => Calendar = (y: number): Calendar => ({
  isLeapYear: (): boolean => y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0)
});
