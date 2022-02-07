/* eslint-disable no-unused-vars */
import {ErrorInfo} from './Interfaces';
import chalk from 'chalk';

export enum ErrorCode {
  InvalidValueOfBitmapSize,
  InvalidNumberOfTestCases,
  InvalidActualBitmapSize
}

export const invalidValueOfBitmapSize = (): ErrorInfo => ({
  type: ErrorCode.InvalidValueOfBitmapSize,
  message: 'Input has Invalid value of Bitmap size.'
});

export const invalidNumberOfTestCasesError = (): ErrorInfo => ({
  type: ErrorCode.InvalidNumberOfTestCases,
  message: 'No. of Tests cases defined is Invalid.'
});

export const invalidActualNumberOfTestCasesError = (): ErrorInfo => ({
  type: ErrorCode.InvalidNumberOfTestCases,
  message: 'Actual No. of Tests cases are more than defined no. of Test cases.'
});

export const invalidActualBitmapSizeError = (): ErrorInfo => ({
  type: ErrorCode.InvalidActualBitmapSize,
  message: 'Actual Bitmap size is more than defined range'
});

export const throwError = (oError: any): void => {
  if (oError.hasOwnProperty('message')) {
    throw new Error(
        chalk.bgHex('#FFFF00').red(chalk.bold(`Error!! ${oError.message}`))
    );
  } else {
    throw new Error(
        chalk.bgHex('#FFFF00').red(chalk.bold(`Error!! ${oError}`))
    );
  }
};
