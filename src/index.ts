/**
 * Calculate the hyperbolic sine of a number.
 *
 * @param x The angle, in radians, whose hyperbolic sine is computed.
 * @returns The hyperbolic sine of `x`.
 *
 * @example
 * ```typescript
 * sinh(1);
 * // => 1.1752011936438014
 * ```
 */
export function sinh(x: number): number {
  return typeof Math.sinh === 'function'
    ? Math.sinh(x)
    : (Math.exp(x) - Math.exp(-x)) / 2;
}
