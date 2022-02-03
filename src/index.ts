import readline from 'readline';
import {Constants} from './Constants';
import {invalidNumberOfTestCasesError, invalidValueOfBitmapSize, whitePixelNotFoundError} from './ErrorHandler';

/**
 * Hello World Project
 */
class BitmapProcessor {
  public numberOfTestCases: number | undefined;
  public rowSize: number | undefined;
  public columnSize: number | undefined;
  public ainputTemplateArray: any[][] = [];
  public aOutputArray: any[][] = [];

  constructor() {}

  public start(): void {
    const fullProcessStart = process.hrtime();
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    });

    rl.on('line', (line) => {
      try {
        this.readLine(line.trim());
      } catch (error) {
        throw new Error(`Error while parsing Line: ${error}`);
      }
    });

    rl.on('close', () => {
      const calculationProcessStart = process.hrtime();
      this.calculateDistance();
      const fullProcessStop = process.hrtime(fullProcessStart);
      const calculationProcessStop = process.hrtime(calculationProcessStart);
      console.log('Output:');
      console.log('-------');

      this.printOutput();
      console.log(`Total Time Taken to calculating distance alone is: ${(calculationProcessStop[0] * 1e9 + calculationProcessStop[1]) / 1e9} seconds`);
      console.log(`Total Time Taken to complete the full process: ${(fullProcessStop[0] * 1e9 + fullProcessStop[1]) / 1e9} seconds`);
    });
  }

  private printOutput(): void {
    for (let rowInd = 0; rowInd < this.aOutputArray.length; rowInd++) {
      for (let colInd = 0; colInd < this.aOutputArray[rowInd].length; colInd++) {
        process.stdout.write(this.aOutputArray[rowInd][colInd] + ' ');
      }
      process.stdout.write('\n');
    }
    process.stdout.write('\n');
  }

  private readLine(line: string): void {
    if (this.numberOfTestCases === undefined) {
      if (!(Number(line) >= Constants.MIN_NUMBER_OF_TEST_CASE && Number(line) <= Constants.MAX_NUMBER_OF_TESTCASES)) {
        throw invalidNumberOfTestCasesError();
      }
      this.numberOfTestCases = Number(line);
      return;
    }
    if (line.includes(' ')) {
      if (this.rowSize === undefined && this.columnSize === undefined) {
        const [rLength, cHeight] = line.split(' ');
        if (
          Number(rLength) < Constants.MIN_ALLOWED_BITMAP_SIZE ||
          Number(rLength) > Constants.MAX_ALLOWED_BITMAP_SIZE ||
          Number(cHeight) < Constants.MIN_ALLOWED_BITMAP_SIZE ||
          Number(cHeight) > Constants.MAX_ALLOWED_BITMAP_SIZE
        ) {
          throw invalidValueOfBitmapSize();
        }
      }
    } else {
      if (line === '') {
        this.insertEmtyLineToOutputArray();
      }
      this.ainputTemplateArray.push(line.split(''));
    }
    return;
  }

  private insertEmtyLineToOutputArray = (): void => {
    const indexToAddEmptyChars = this.ainputTemplateArray.length - 1;
    for (let colIndex = 0; colIndex < this.columnSize!; colIndex++) {
      this.ainputTemplateArray[indexToAddEmptyChars][colIndex] = '';
    }
  };

  private calculateDistance = (): void => {
    let previousOccurenceOfWhite: number = -1;
    let currentOccurrenceOfWhite: number = 0;
    let allOccurrencesOfWhite: number[] = [];
    let indexOfCurrentOccurrenceOfWhite: number = 0;
    let outputRowIndex: number = 0;
    for (let index: number = 0; index < this.ainputTemplateArray.length; index++) {
      const aOutputRow: String[] = [];
      const rowData: String[] = this.ainputTemplateArray[index];
      allOccurrencesOfWhite = this.findOccurenceOfWhites(rowData);
      for (let ind: number = 0; ind < rowData.length; ind++) {
        if (String(rowData[ind]) !== '' && Number(rowData[ind]) !== -1) {
          currentOccurrenceOfWhite = allOccurrencesOfWhite[indexOfCurrentOccurrenceOfWhite];

          if (Number(rowData[ind]) === 1) {
            aOutputRow.push('0');
            indexOfCurrentOccurrenceOfWhite++;
            previousOccurenceOfWhite = currentOccurrenceOfWhite;
          } else {
            aOutputRow.push(String(this.computeOutput(currentOccurrenceOfWhite, previousOccurenceOfWhite, ind)));
          }
        } else {
          aOutputRow.push(rowData[ind]);
        }
      }
      this.aOutputArray.push(aOutputRow);
      outputRowIndex++;
      indexOfCurrentOccurrenceOfWhite = 0;
    }
  };

  private findOccurenceOfWhites = (rowData: String[]): number[] => {
    const occurencesOfWhitesInRowData: Array<number> = [];
    for (let index: number = 0; index < rowData.length; index++) {
      if (Number(rowData[index]) === 1) {
        occurencesOfWhitesInRowData.push(index);
      }
    }
    return occurencesOfWhitesInRowData;
  };

  private computeOutput = (currentOccurrenceOfWhite: number, previousOccurenceOfWhite: number, index: number): number => {
    if (previousOccurenceOfWhite < 0) {
      return Math.abs(index - currentOccurrenceOfWhite);
    } else if (typeof currentOccurrenceOfWhite === 'undefined' && previousOccurenceOfWhite >= 0) {
      return Math.abs(index - previousOccurenceOfWhite);
    } else if (typeof previousOccurenceOfWhite === 'undefined' && currentOccurrenceOfWhite >= 0) {
      return Math.abs(index - currentOccurrenceOfWhite);
    }
    return Math.min(Math.abs(index - currentOccurrenceOfWhite), Math.abs(index - previousOccurenceOfWhite));
  };
}

new BitmapProcessor().start();
