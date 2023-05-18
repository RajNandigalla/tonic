import dayjs from 'dayjs';

export const DATE_FORMAT = 'MMM DD,YYYY';
export const LONG_FORMAT = 'MMM DD,YYYY HH:mm:ss';
export const ISO_FORMAT = 'YYYY-MM-DD';
export const ISO_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

export const getFormattedDate = (date: string | Date): string => (date ? dayjs(date).format(DATE_FORMAT) : '');

export const isAfter = (startDate: string | Date, endDate: string | Date): boolean => {
  if (!startDate || !endDate) return false;
  return dayjs(startDate).isAfter(dayjs(endDate));
};
