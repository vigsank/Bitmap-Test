/* eslint-disable no-unused-vars */
import {ErrorInfo} from './Interfaces';
import chalk from 'chalk';

export enum ErrorCode {
  InvalidValueOfBitmapSize,
  InvalidNumberOfTestCases,
  NoWhitePixelFoundInTheRow,
}

export const invalidValueOfBitmapSize = (): ErrorInfo => ({
  type: ErrorCode.InvalidValueOfBitmapSize,
  message: 'Input has Invalid value of Bitmap size.'
});

export const invalidNumberOfTestCasesError = (): ErrorInfo => ({
  type: ErrorCode.InvalidNumberOfTestCases,
  message: 'No. of Tests cases defined is Invalid.'
});

export const whitePixelNotFoundErrorInTheRow = (): ErrorInfo => ({
  type: ErrorCode.NoWhitePixelFoundInTheRow,
  message: 'No White Pixel Found in a Row.'
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
