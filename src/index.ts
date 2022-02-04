/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import {
  invalidNumberOfTestCasesError,
  invalidValueOfBitmapSize,
  whitePixelNotFoundErrorInTheRow,
} from './ErrorHandler';

import {Constants} from './Constants';
import readline from 'readline';

class BitmapProcessor {
  public nNumberOfTestCases: number | undefined;
  public nRowSize: number | undefined;
  public nColumnSize: number | undefined;
  public aInputAsArray: String[][] = [];
  public aOutputArray: String[][] = [];

  /**
   * Empty Constructor
   */

  constructor() {}

  public start(): void {
    const tFullProcessStart = process.hrtime();
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });

    rl.on('oLine', (oLine: any) => {
      try {
        this.readLine(oLine.trim());
      } catch (oError: any) {
        if (
          oError &&
          oError.hasOwnProperty('type') &&
          oError.hasOwnProperty('message')
        ) {
          console.log(
              // eslint-disable-next-oLine max-len
              `Error while calculating the distance:
              ${JSON.stringify(oError)}.`,
          );
          process.exit(0);
        } else {
          console.log(`Error while parsing oLine: ${oError}`);
          process.exit(0);
        }
      }
    });

    // Handle File Read error
    rl.on('error', () =>
      console.log('Error while reading the lines from file.'),
    );

    rl.on('close', () => {
      const tCalculationProcessStart = process.hrtime();
      this.calculateDistance();
      const tFullProcessStop = process.hrtime(tFullProcessStart);
      const tCalculationProcStop = process.hrtime(tCalculationProcessStart);
      console.log('Output:');
      console.log('-------');

      this.printOutput();
      console.log(
          `Total Time Taken to calculating distance alone is: ${
            (tCalculationProcStop[0] * 1e9 + tCalculationProcStop[1]) / 1e9
          } seconds`,
      );
      console.log(
          `Total Time Taken to complete the full process: ${
            (tFullProcessStop[0] * 1e9 + tFullProcessStop[1]) / 1e9
          } seconds`,
      );
      // stop the process.
      process.exit(0);
    });
  }

  private printOutput(): void {
    for (
      let nRowInd: number = 0;
      nRowInd < this.aOutputArray.length;
      nRowInd++
    ) {
      for (
        let nColInd: number = 0;
        nColInd < this.aOutputArray[nRowInd].length;
        nColInd++
      ) {
        process.stdout.write(this.aOutputArray[nRowInd][nColInd] + ' ');
      }
      process.stdout.write('\n');
    }
    process.stdout.write('\n');
  }

  private readLine(oLine: string): void {
    if (this.nNumberOfTestCases === undefined) {
      if (
        !(
          Number(oLine) >= Constants.MIN_NUMBER_OF_TEST_CASE &&
          Number(oLine) <= Constants.MAX_NUMBER_OF_TESTCASES
        )
      ) {
        throw invalidNumberOfTestCasesError();
      }
      this.nNumberOfTestCases = Number(oLine);
      return;
    }
    if (oLine.includes(' ')) {
      if (this.nRowSize === undefined && this.nColumnSize === undefined) {
        const [nRowLength, nColHeight] = oLine.split(' ');
        if (
          Number(nRowLength) < Constants.MIN_ALLOWED_BITMAP_SIZE ||
          Number(nRowLength) > Constants.MAX_ALLOWED_BITMAP_SIZE ||
          Number(nColHeight) < Constants.MIN_ALLOWED_BITMAP_SIZE ||
          Number(nColHeight) > Constants.MAX_ALLOWED_BITMAP_SIZE
        ) {
          throw invalidValueOfBitmapSize();
        }
      }
    } else {
      if (oLine === '') {
        this.insertEmptyLineToOutputArray();
      }
      this.aInputAsArray.push(oLine.split(''));
    }
    return;
  }

  private insertEmptyLineToOutputArray = (): void => {
    const nIndexToAddEmptyChars: number = this.aInputAsArray.length - 1;
    for (
      let nColIndex: number = 0;
      nColIndex < this.nColumnSize!;
      nColIndex++
    ) {
      this.aInputAsArray[nIndexToAddEmptyChars][nColIndex] = '';
    }
  };

  private calculateDistance = (): void => {
    let nPreviousOccurrenceOfWhite: number = -1;
    let nCurrentOccurrenceOfWhite: number = 0;
    let aAllOccurrencesOfWhiteInCurrentRow: number[] = [];
    let aIndexOfCurrentOccurrenceOfWhite: number = 0;
    for (let index: number = 0; index < this.aInputAsArray.length; index++) {
      const aOutputRow: String[] = [];
      const aCurrentRowData: String[] = this.aInputAsArray[index];
      aAllOccurrencesOfWhiteInCurrentRow =
        this.findAllOccurrenceOfWhitesInCurrentRow(aCurrentRowData);
      for (
        let nCurrentRowIteratorIndex: number = 0;
        nCurrentRowIteratorIndex < aCurrentRowData.length;
        nCurrentRowIteratorIndex++
      ) {
        if (
          String(aCurrentRowData[nCurrentRowIteratorIndex]) !== '' &&
          Number(aCurrentRowData[nCurrentRowIteratorIndex]) !== -1
        ) {
          nCurrentOccurrenceOfWhite =
            aAllOccurrencesOfWhiteInCurrentRow[
                aIndexOfCurrentOccurrenceOfWhite
            ];

          if (Number(aCurrentRowData[nCurrentRowIteratorIndex]) === 1) {
            aOutputRow.push('0');
            aIndexOfCurrentOccurrenceOfWhite++;
            nPreviousOccurrenceOfWhite = nCurrentOccurrenceOfWhite;
          } else {
            aOutputRow.push(
                String(
                    this.computeRowBasedDistance(
                        nCurrentOccurrenceOfWhite,
                        nPreviousOccurrenceOfWhite,
                        nCurrentRowIteratorIndex,
                    ),
                ),
            );
          }
        } else {
          aOutputRow.push(aCurrentRowData[nCurrentRowIteratorIndex]);
        }
      }
      this.aOutputArray.push(aOutputRow);
      aIndexOfCurrentOccurrenceOfWhite = 0;
    }
  };

  private findAllOccurrenceOfWhitesInCurrentRow = (
      aCurrentRowData: String[],
  ): number[] => {
    const aOccurrencesOfWhitesInRowData: number[] = [];
    for (
      let nCurrentRowIteratorIndex: number = 0;
      nCurrentRowIteratorIndex < aCurrentRowData.length;
      nCurrentRowIteratorIndex++
    ) {
      if (Number(aCurrentRowData[nCurrentRowIteratorIndex]) === 1) {
        aOccurrencesOfWhitesInRowData.push(nCurrentRowIteratorIndex);
      }
    }
    if (!aOccurrencesOfWhitesInRowData.length) {
      throw whitePixelNotFoundErrorInTheRow();
    }
    return aOccurrencesOfWhitesInRowData;
  };

  private computeRowBasedDistance = (
      nCurrentOccurrenceOfWhite: number,
      nPreviousOccurrenceOfWhite: number,
      nCurrentRowIteratorIndex: number,
  ): number => {
    if (nPreviousOccurrenceOfWhite < 0) {
      return Math.abs(nCurrentRowIteratorIndex - nCurrentOccurrenceOfWhite);
    } else if (
      typeof nCurrentOccurrenceOfWhite === 'undefined' &&
      nPreviousOccurrenceOfWhite >= 0
    ) {
      return Math.abs(nCurrentRowIteratorIndex - nPreviousOccurrenceOfWhite);
    } else if (
      typeof nPreviousOccurrenceOfWhite === 'undefined' &&
      nCurrentOccurrenceOfWhite >= 0
    ) {
      return Math.abs(
          innCurrentRowIteratorIndexdex - nCurrentOccurrenceOfWhite,
      );
    }
    return Math.min(
        Math.abs(nCurrentRowIteratorIndex - nCurrentOccurrenceOfWhite),
        Math.abs(nCurrentRowIteratorIndex - nPreviousOccurrenceOfWhite),
    );
  };
}

new BitmapProcessor().start();
