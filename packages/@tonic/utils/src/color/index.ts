/**
 * Color Code Utility
 * @param {string / HexColor / RGBA Color} colorCode
 * @returns
 *  1. Null if null / undefined
 *  2. If colorCode starts with 'nx-' returns internal css variable 'var(--nx-blue)'
 *  3. return string / HexColor / RGBA Color
 */
const color = (colorCode: string): string | null => {
  if (!colorCode) return null;
  if (colorCode.startsWith('nx-')) return `var(--${colorCode})`;
  return colorCode;
};

export default color;