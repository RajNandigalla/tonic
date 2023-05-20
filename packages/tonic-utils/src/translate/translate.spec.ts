import translate from '.';

describe('Translate Util', () => {
  it('should check if input txt is null / undefined', () => {
    // @ts-ignore
    expect(translate(null, {})).toBe(null);
    // @ts-ignore
    expect(translate(undefined, {})).toBe(null);
  });
  it('should check if data is null / undefined', () => {
    const txt = 'Hello world';
    expect(translate(txt, null)).toBe(txt);
    expect(translate(txt, undefined)).toBe(txt);
    expect(translate(txt, {})).toBe(txt);
    expect(translate(txt, () => {})).toBe(txt);
  });
  it('should parse and return modified txt', () => {
    const txt = 'welcome {user}';
    expect(translate(txt, { user: 'Raj' })).toBe('welcome Raj');
  });
  it('should check false data input', () => {
    const txt = 'welcome {user} !';
    expect(translate(txt, { age: 13 })).toBe(txt);
  });
});
