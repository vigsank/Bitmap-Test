/* eslint-disable max-len */
import {
  ErrorCode,
  invalidValueOfBitmapSize
} from '../../src/Utilities/ErrorHandler';

import {ErrorInfo} from '../../src/Utilities/Interfaces';

describe('Error Handler Tests', () => {
  it('Test Invalid Test Case Range', () => {
    const expectedErrorObj = {
      type: ErrorCode.InvalidValueOfBitmapSize,
      message: 'Input has Invalid value of Bitmap size.'
    };
    expect(invalidValueOfBitmapSize()).toStrictEqual(expectedErrorObj);
    expect(expectedErrorObj as ErrorInfo).toBeTruthy();
  });
});
