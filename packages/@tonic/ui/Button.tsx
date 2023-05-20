'use client';

import * as React from 'react';
import { ISO_FORMAT, Logger, debug, getFormattedDate, translate } from '../utils';

export const Button = () => {
  const res: string | null = translate('ok', {});
  getFormattedDate(ISO_FORMAT);
  const x = new Logger(console);
  debug('something here goes');

  return <button onClick={() => alert('boop')}>Boop</button>;
};
