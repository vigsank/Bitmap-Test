import {
  invalidNumberOfTestCasesError,
  invalidValueOfBitmapSize
} from './ErrorHandler';

import {BitmapDescription} from './Interfaces';
import {Validator} from './Validator';

/**
 * Class that parses the input and forms an array.
 */
export class Parser {
  public nNumberOfTestCases: number | undefined;
  // Array that will hold the input data.
  private aInputAsArray: String[][] = [];
  // Bitmap description
  private oBitMapDescription!: BitmapDescription;

  /**
   *
   * @param {string} oCurrentLine Current Line that is read and to be parsed.
   * Gets the current line , parses and adds into inputArray.
   */
  public parse(oCurrentLine: string): void {
    /**
     * If nNumberOfTestCases is undefined, then this is the first line of the
     * input that is being read.
     */
    if (this.nNumberOfTestCases === undefined) {
      /**
       * Validates if the no of Test case is within the range.
       */
      if (!Validator.isNoOfTestCasesWithinRange(Number(oCurrentLine))) {
        throw invalidNumberOfTestCasesError();
      }
      /**
       * This variable is not used anywhere but used to read upcoming lines
       * and populate incoming array.
       */
      this.nNumberOfTestCases = Number(oCurrentLine);
      return;
    }
    /**
     * If the line has a single space between the characters, then this is the
     * Bitmap description of one particular test case.
     */
    if (oCurrentLine.includes(' ')) {
      /**
       * Validates if the Bitmap description is within the test range.
       */
      this.oBitMapDescription = {
        rowLength: Number(oCurrentLine.split(' ')[0]),
        columnHeight: Number(oCurrentLine.split(' ')[1])
      };
      if (!Validator.isBitmapSizeWithinRange(this.oBitMapDescription)) {
        throw invalidValueOfBitmapSize();
      }
    } else {
      if (oCurrentLine === '') {
        this.insertEmptyLineToOutputArray();
      } else {
        this.aInputAsArray.push(oCurrentLine.split(''));
      }
    }
    return;
  }

  /**
   * @return {String} Input array that was parsed and created from Input
   */
  public getParsedArray(): String[][] {
    return this.aInputAsArray;
  }

  /**
   * Push Empty row to input array when the current line
   * from input is an empty line.
   */
  private insertEmptyLineToOutputArray = (): void => {
    this.aInputAsArray.push([]);
    for (
      let nColIndex: number = 0;
      nColIndex < this.oBitMapDescription.columnHeight!;
      nColIndex++
    ) {
      this.aInputAsArray[this.aInputAsArray.length - 1][nColIndex] = '';
    }
  };
}
