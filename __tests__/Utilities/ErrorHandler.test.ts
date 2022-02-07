/* eslint-disable max-len */
import {
  ErrorCode,
  invalidValueOfBitmapSize,
  throwError
} from '../../src/Utilities/ErrorHandler';

import {ErrorInfo} from '../../src/Utilities/Interfaces';
import chalk from 'chalk';

describe('Error Handler Tests', () => {
  it('Test Invalid Test Case Range', () => {
    const expectedErrorObj = {
      type: ErrorCode.InvalidValueOfBitmapSize,
      message: 'Input has Invalid value of Bitmap size.'
    };
    expect(invalidValueOfBitmapSize()).toStrictEqual(expectedErrorObj);
    expect(expectedErrorObj as ErrorInfo).toBeTruthy();
  });

  it('Test throwError Method', () => {
    expect.assertions(1); // expects one failure
    const errorMsg: String = 'Input has Invalid value of Bitmap size.';
    try {
      throwError(errorMsg);
    } catch (oError: any) {
      expect(oError.message).toBe(
          chalk.bgHex('#FFFF00').red(chalk.bold(`Error!! ${errorMsg}`))
      );
    }
  });
});
