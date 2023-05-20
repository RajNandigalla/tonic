import color from '.';

describe('Color Util', () => {
  it('should check if color is null / undefined', () => {
    // @ts-ignore
    expect(color(null)).toEqual(null);
    // @ts-ignore
    expect(color(undefined)).toEqual(null);
  });
  it('should check if color css variable starting with nx', () => {
    expect(color('nx-blue')).toEqual('var(--nx-blue)');
  });
  it('should check if color is hex value', () => {
    expect(color('#000')).toEqual('#000');
  });
});
