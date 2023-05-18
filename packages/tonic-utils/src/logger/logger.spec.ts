import Logger, * as Method from './index';

describe('Logger :: ', () => {
  it('should check if custom logger is valid with existing methods', () => {
    // @ts-ignore
    const customLogger = new Logger(global.console, {});

    const logSpy = jest.spyOn(customLogger, 'log');
    customLogger.log('Hello World !');
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Hello World !');
  });

  it('should check if custom logger with invalid console & invalid method throws error', () => {
    try {
      // @ts-ignore
      // eslint-disable-next-line no-unused-vars
      const customLogger = new Logger({}, { print: true });
    } catch (error: any) {
      expect(error.message).toBe(
        'Provided console is Invalid, Please check Instantiation of Logger'
      );
    }
  });

  it('should check if custom logger with valid console & valid methods passes', () => {
    const customLogger = new Logger({ ...console }, { count: true });
    const logSpy = jest.spyOn(customLogger, 'write');

    // @ts-ignore
    customLogger.write('count', 'Hello World !');
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('count', 'Hello World !');
  });

  it('should check if custom logger with valid console & invalid methods passes', () => {
    try {
      // @ts-ignore
      // eslint-disable-next-line no-unused-vars
      const customLogger = new Logger(
        { ...console },
        { troy: true, count: true, print: true }
      );
    } catch (error: any) {
      expect(error.message).toBe(
        'Provided console is Invalid, Please check Instantiation of Logger'
      );
    }
  });

  it('should check if all console methods are logging correctly', () => {
    const logSpy = jest.spyOn(Method, 'log');
    Method.log('Hello World !');
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenCalledWith('Hello World !');

    const errorSpy = jest.spyOn(Method, 'error');
    Method.error('Hello World !');
    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(errorSpy).toHaveBeenCalledWith('Hello World !');

    const warn = jest.spyOn(Method, 'warn');
    Method.warn('Hello World !');
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith('Hello World !');

    const debug = jest.spyOn(Method, 'debug');
    Method.debug('Hello World !');
    expect(debug).toHaveBeenCalledTimes(1);
    expect(debug).toHaveBeenCalledWith('Hello World !');

    const groupSpy = jest.spyOn(Method, 'group');
    Method.group('Hello World !');
    expect(groupSpy).toHaveBeenCalledTimes(1);
    expect(groupSpy).toHaveBeenCalledWith('Hello World !');

    const groupCollapsedSpy = jest.spyOn(Method, 'groupCollapsed');
    Method.groupCollapsed('Hello World !');
    expect(groupCollapsedSpy).toHaveBeenCalledTimes(1);
    expect(groupCollapsedSpy).toHaveBeenCalledWith('Hello World !');

    const groupEndSpy = jest.spyOn(Method, 'groupEnd');
    Method.groupEnd('Hello World !');
    expect(groupEndSpy).toHaveBeenCalledTimes(1);
    expect(groupEndSpy).toHaveBeenCalledWith('Hello World !');
  });
});
