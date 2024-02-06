/* eslint-disable tsdoc/syntax */
/**
 * A set of lodash-style generic utilities.
 */

/**
 * Generate an array of integers from 0 (inclusive) to n (exclusive)
 * eg. range(4) // [0, 1, 2, 3]
 */
export const range = (n: number): number[] => [...Array(n).keys()];

/**
 * Pad a number with 0s.
 * eg. zeroPadNumber(5) -> "05"
 *     zeroPadNumber(20, 4) -> "0020"
 */
export const zeroPadNumber = (n: number, spaces = 2): string =>
  `${n}`.padStart(spaces, "0");
