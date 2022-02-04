/* eslint-disable no-unused-vars */
import {ErrorInfo} from './Interfaces';

enum ErrorCode {
  InvalidValueOfBitmapSize,
  InvalidNumberOfTestCases,
  NoWhitePixelFoundInTheRow
}

const invalidValueOfBitmapSize = (): ErrorInfo => ({
  type: ErrorCode.InvalidValueOfBitmapSize,
  message: 'Input has Invalid value of Bitmap size.'
});

const invalidNumberOfTestCasesError = (): ErrorInfo => ({
  type: ErrorCode.InvalidNumberOfTestCases,
  message: 'No. of Tests cases defined is Invalid.'
});

const whitePixelNotFoundErrorInTheRow = (): ErrorInfo => ({
  type: ErrorCode.NoWhitePixelFoundInTheRow,
  message: 'No White Pixel Found in a Row.'
});

export {
  invalidValueOfBitmapSize,
  invalidNumberOfTestCasesError,
  whitePixelNotFoundErrorInTheRow
};
