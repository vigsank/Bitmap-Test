import {DistanceCalculator} from '../Calculations/DistanceCalculator';
import chalk from 'chalk';

/**
 *
 * @param {String} aInputArray Transposes a given array
 * @return {String} Transposed Array
 */
const transposeAnArray = (aInputArray: String[][]): String[][] => {
  return Object.keys(aInputArray[0]).map((nCol: any) =>
    aInputArray.map((nRow: any) => nRow[nCol])
  );
};

/**
 *
 * @param {String} aColumnBasedDistances Array where distances from a pixel
 * are calculated column wise respect to input test case.
 * @return {String} Array containing indexes of columns that has only Zeroes
 */
const findColumnsWithAllZeroes = (
    aColumnBasedDistances: String[][]
): number[] => {
  const aColumnsWithAllZeros: number[] = [];
  const aTransposedColumnBasedDistances: String[][] = transposeAnArray(
      aColumnBasedDistances
  );
  for (
    let nRowIndex = 0;
    nRowIndex < aTransposedColumnBasedDistances.length;
    nRowIndex++
  ) {
    if (!aTransposedColumnBasedDistances[nRowIndex].includes('1')) {
      aColumnsWithAllZeros.push(nRowIndex);
    }
  }
  return aColumnsWithAllZeros;
};

/**
 *
 * @param {Strin} aRowBasedDistances Array where distances from a pixel
 * are calculated Row wise respect to input test case.
 * @param {String} aColumnBasedDistances Array where distances from a pixel
 * are calculated Row wise respect to input test case.
 * @return {String} Result array that has only min distances based on comparison
 * from row based and column based distances.
 * If one column in aColumnBasedDistances has all zeroes, then min distance will
 * the value from aRowBasedDistances.
 */
const compareArraysAndFindMinDistances = (
    aRowBasedDistances: String[][],
    aColumnBasedDistances: String[][]
): String[][] => {
  const aColumnsWithAllZeros: number[] = findColumnsWithAllZeroes(
      aColumnBasedDistances
  );
  const aComputedDistances: String[][] = [];
  for (let nRowIndex = 0; nRowIndex < aRowBasedDistances.length; nRowIndex++) {
    const aComputedMinDistanceOfCurrentRow: String[] = [];
    for (
      let nColIndex = 0;
      nColIndex < aRowBasedDistances[0].length;
      nColIndex++
    ) {
      if (
        aColumnBasedDistances[0].length >
        aComputedMinDistanceOfCurrentRow.length
      ) {
        if (
          Number(aRowBasedDistances[nRowIndex][nColIndex]) <
            Number(aColumnBasedDistances[nRowIndex][nColIndex]) ||
          aColumnsWithAllZeros.includes(nColIndex)
        ) {
          aComputedMinDistanceOfCurrentRow.push(
              aRowBasedDistances[nRowIndex][nColIndex]
          );
        } else {
          aComputedMinDistanceOfCurrentRow.push(
              aColumnBasedDistances[nRowIndex][nColIndex]
          );
        }
      }
    }
    aComputedDistances.push(aComputedMinDistanceOfCurrentRow);
  }
  return aComputedDistances;
};

/**
 * 
 * @param {String} aInputBitMap Input Bitmap array
 * Computes the distances and prints the result.
 */
export const calculateDistanceAndPrintOutput = (
    aInputBitMap: String[][][]
): void => {
  if (aInputBitMap.length > 0) {
    process.stdout.write(chalk.green(chalk.bold('Computed Distances :')));
    process.stdout.write('\n');
    process.stdout.write(chalk.bold('-------------------------------------'));
    process.stdout.write('\n\n');

    aInputBitMap.forEach((aTestCaseToBeProcessed: String[][]) => {
      const aRowBasedComputedDistances = DistanceCalculator.calculateDistances(
          aTestCaseToBeProcessed
      );
      /**
       * Transpose is done to calculate distance between two pixels column wise.
       */
      const aTransposedInputBitmap = transposeAnArray(aTestCaseToBeProcessed);
      let aColumnBasedComputedDistances = DistanceCalculator.calculateDistances(
          aTransposedInputBitmap
      );
      /**
       * Once distance between two pixels column wise is calculated,
       * get it back to original dimension.
       */
      aColumnBasedComputedDistances = transposeAnArray(
          aColumnBasedComputedDistances
      );

      /**
       * Compares the two array of distances and print the result
       * to output.
       */
      printOutput(
          compareArraysAndFindMinDistances(
              aRowBasedComputedDistances,
              aColumnBasedComputedDistances
          )
      );
    });
  }
};

/**
 * @param {String} aComputedDistances Output Array to be printed as Standard
 * Output
 * Prints the output array.
 */
export const printOutput = (aComputedDistances: String[][]): void => {
  for (
    let nRowInd: number = 0;
    nRowInd < aComputedDistances.length;
    nRowInd++
  ) {
    for (
      let nColInd: number = 0;
      nColInd < aComputedDistances[nRowInd].length;
      nColInd++
    ) {
      process.stdout.write(
          chalk.green(aComputedDistances[nRowInd][nColInd] + ' ')
      );
    }
    process.stdout.write('\n');
  }
  process.stdout.write('\n');
};
