import {BitmapDescription} from './Interfaces';
import {Constants} from './Constants';

/**
 * Validator class that has Helper methods to check input validity.
 */
export class Validator {
  /**
   *
   * @param {number} nNoOfTestCases No Of Test cases as
   * defined in the input
   * @return {Boolean} whether the number is within the
   * allowed the No.Of.TestCases (1<=n<=1000)
   */
  public static isNoOfTestCasesWithinRange(nNoOfTestCases: number): boolean {
    return (
      nNoOfTestCases >= Constants.MIN_NUMBER_OF_TEST_CASE &&
      nNoOfTestCases <= Constants.MAX_NUMBER_OF_TEST_CASE
    );
  }

  /**
   *
   * @param {BitmapDescription} oBitMapDescription Current Bitmap's description
   * @return {Boolean} whether the given BitmapDescription is within the
   * allowed range (1<=n<=182)
   */
  public static isBitmapSizeWithinRange(
      oBitMapDescription: BitmapDescription
  ): boolean {
    return (
      oBitMapDescription.rowSize >= Constants.MIN_ALLOWED_BITMAP_SIZE &&
      oBitMapDescription.rowSize <= Constants.MAX_ALLOWED_BITMAP_SIZE &&
      oBitMapDescription.columnSize >= Constants.MIN_ALLOWED_BITMAP_SIZE &&
      oBitMapDescription.columnSize <= Constants.MAX_ALLOWED_BITMAP_SIZE
    );
  }
}
