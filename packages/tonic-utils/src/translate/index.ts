// eslint-disable-next-line import/prefer-default-export
export const translate = (txt: string, obj: any): string | null => {
  if (!txt) return null;
  if (!obj) return txt;

  return Object.keys(obj).reduce((acc: string, key: string): string => {
    const placeholder = `{${key}}`;
    if (acc.includes(placeholder)) {
      return acc.replace(new RegExp(placeholder, 'g'), obj[key]);
    }
    return acc;
  }, txt);
};