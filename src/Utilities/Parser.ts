import {
  invalidActualBitmapSizeError,
  invalidActualNumberOfTestCasesError,
  invalidNumberOfTestCasesError,
  invalidValueOfBitmapSize,
  throwError,
  whitePixelNotFoundError
} from './ErrorHandler';

import {BitmapDescription} from './Interfaces';
import {Constants} from '../Utilities/Constants';
import {Validator} from './Validator';

/**
 * Class that parses the input and forms an array.
 */
export class Parser {
  private nGivenNumberOfTestCases: number | undefined;
  private nActualNumberOfTestCases: number = 0;
  // Array that will hold the input data.
  private aInputBitMapAsArray: String[][] = [];
  // Bitmap Size
  private oBitMapDescription!: BitmapDescription;
  // Actual Number of Rows after parsing one test case
  private nActualNumberOfRows: number = 0;
  // Parsed Bitmap as Array
  private aInputBitMapToBeProcessed: String[][][] = [];

  /**
   *
   * @param {String} oCurrentLine Current Line that is read and to be parsed.
   * Gets the current line , parses and adds into inputArray.
   */
  public parse(oCurrentLine: String): void {
    /**
     * If nGivenNumberOfTestCases is undefined, then this is the first line of
     * the input that is being read.
     */
    if (this.nGivenNumberOfTestCases === undefined) {
      /**
       * Validates if the no of Test case is within the range.
       */
      if (!Validator.isNoOfTestCasesWithinRange(Number(oCurrentLine))) {
        throwError(invalidNumberOfTestCasesError());
      }
      /**
       * This variable is not used anywhere but used to read upcoming lines
       * and populate incoming array.
       */
      this.nGivenNumberOfTestCases = Number(oCurrentLine);
      return;
    }
    /**
     * If the line has a single space between the characters, then this is the
     * Bitmap description of one particular test case.
     */
    if (oCurrentLine.includes(' ')) {
      // Reset before parsing next test case
      this.nActualNumberOfRows = 0;
      /**
       * Validates if the Bitmap description is within the test range.
       */
      this.oBitMapDescription = {
        rowSize: Number(oCurrentLine.split(' ')[0]),
        columnSize: Number(oCurrentLine.split(' ')[1])
      };
      if (!Validator.isBitmapSizeWithinRange(this.oBitMapDescription)) {
        throwError(invalidValueOfBitmapSize());
      }
    } else {
      if (oCurrentLine === '') {
        /**
         * If the Given No. Of test case value is lesser than actual real
         * number of test cases, then throw error.
         */
        this.nActualNumberOfTestCases++;
        if (this.nGivenNumberOfTestCases <= this.nActualNumberOfTestCases) {
          throwError(invalidActualNumberOfTestCasesError());
        }
      } else {
        /**
         * When no. of pixels in current row > rowLength of Bitmap,
         * then throw error.
         * Similarly no. of rows per test case > columnLength of Bitmap,
         * then throw error.
         */
        this.nActualNumberOfRows++;
        if (
          !(
            this.oBitMapDescription.columnSize >=
              oCurrentLine.split('').length &&
            this.oBitMapDescription.rowSize >= this.nActualNumberOfRows
          )
        ) {
          throwError(invalidActualBitmapSizeError());
        }
        /**
         * After iterating, if no White pixels found, then throw error
         * as atleast each row should have atleast one White.
         */
        if (
          !oCurrentLine.split('').includes(String(Constants.WHITE_PIXEL_VALUE))
        ) {
          throwError(whitePixelNotFoundError());
        }
        this.aInputBitMapAsArray.push(oCurrentLine.split(''));
        if (this.oBitMapDescription.rowSize === this.nActualNumberOfRows) {
          /**
           * Push the parsed test case into the array
           * that will be later used to calculate distances.
           */
          this.aInputBitMapToBeProcessed.push(this.aInputBitMapAsArray);
          /**
           * Reset the array to process next text case.
           */
          this.aInputBitMapAsArray = [];
        }
      }
    }
    return;
  }

  /**
   * @return {String} Input array that was parsed and created from Input
   */
  public getBitMapArrayToBeParsed(): String[][][] {
    return this.aInputBitMapToBeProcessed;
  }
}
