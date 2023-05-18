type Console = typeof console;
type Log =
  | 'log'
  | 'error'
  | 'warn'
  | 'debug'
  | 'group'
  | 'groupCollapsed'
  | 'groupEnd';

// eslint-disable-next-line no-underscore-dangle, turbo/no-undeclared-env-vars
const __isDev = process.env.NODE_ENV !== 'production';

const isValidConsole = (
  console: Console & any,
  methods: Record<string, boolean>
): boolean => {
  if (console === global.console) return true;

  return Object.keys(methods).reduce((acc, curr) => {
    if (!acc) return acc;

    if (methods[curr] && console[curr] && typeof console[curr] === 'function') {
      return true;
    }
    global.console.warn(`Method isn't supported ${curr}`);
    return false;
  }, true);
};

class Logger {
  constructor(
    public console: Console,
    public methods: Record<string, boolean> = {}
  ) {
    this.methods = {
      log: true,
      error: true,
      warn: true,
      debug: true,
      group: true,
      groupCollapsed: true,
      groupEnd: true,
      ...methods,
    };
    if (!isValidConsole(console, methods)) {
      throw new Error(
        'Provided console is Invalid, Please check Instantiation of Logger'
      );
    }
  }

  write = (method: Log, ...args: any): void => {
    if (__isDev && this.methods[method]) {
      this.console[method](...args);
    }
  };

  log = (...args: any): void => this.write('log', ...args);

  error = (...args: any): void => this.write('error', ...args);

  warn = (...args: any): void => this.write('warn', ...args);

  debug = (...args: any): void => this.write('debug', ...args);

  group = (...args: any): void => this.write('group', ...args);

  groupCollapsed = (...args: any): void =>
    this.write('groupCollapsed', ...args);

  groupEnd = (...args: any): void => this.write('groupEnd', ...args);
}

export const { log, error, warn, debug, group, groupCollapsed, groupEnd } =
  new Logger(global.console);
export default Logger;
