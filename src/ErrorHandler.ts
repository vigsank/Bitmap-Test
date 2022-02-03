enum ErrorCode {
  InvalidValueOfBitmapSize,
  InvalidNumberOfTestCases,
  NoWhitePixelFound
}

interface Error {
  type: number;
  message: string;
}

const invalidValueOfBitmapSize = (): Error => ({
  type: ErrorCode.InvalidValueOfBitmapSize,
  message: 'Invalid value of Bitmap size!',
});

const invalidNumberOfTestCasesError = (): Error => ({
  type: ErrorCode.InvalidNumberOfTestCases,
  message: 'No. of Tests cases defined is Invalid!',
});

const whitePixelNotFoundError = (): Error => ({
  type: ErrorCode.NoWhitePixelFound,
  message: 'No White Pixel Found',
});

export {
  invalidValueOfBitmapSize,
  invalidNumberOfTestCasesError,
  whitePixelNotFoundError,
};
