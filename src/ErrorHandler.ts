/* eslint-disable no-unused-vars */
enum ErrorCode {
  InvalidValueOfBitmapSize,
  InvalidNumberOfTestCases,
  NoWhitePixelFoundInTheRow
}

interface Error {
  type: number;
  message: string;
}

const invalidValueOfBitmapSize = (): Error => ({
  type: ErrorCode.InvalidValueOfBitmapSize,
  message: 'Input has Invalid value of Bitmap size.',
});

const invalidNumberOfTestCasesError = (): Error => ({
  type: ErrorCode.InvalidNumberOfTestCases,
  message: 'No. of Tests cases defined is Invalid.',
});

const whitePixelNotFoundErrorInTheRow = (): Error => ({
  type: ErrorCode.NoWhitePixelFoundInTheRow,
  message: 'No White Pixel Found in a Row.',
});

export {
  invalidValueOfBitmapSize,
  invalidNumberOfTestCasesError,
  whitePixelNotFoundErrorInTheRow,
};
