/**
 * Hello World Project
 */
class App {
  /** Entry point of our app **/
  public static start() {
    // const noOfTestCases: number = 1;
    const noOfTestCases: number = 2;

    // const m: number = 4;
    // const n: number = 5;

    // const m: number = 3;
    // const n: number = 4;

    // const m: number = 5;
    // const n: number = 6;

    const m: number = 6;
    const n: number = 7;
    // eslint-disable-next-line no-unused-vars
    const computedM: number =
      noOfTestCases > 1 ? m * noOfTestCases + 2 + (noOfTestCases - 1) : m;
    const input: number[][] = createATemplateArrayStructure(computedM, n);
    input[0][0] = noOfTestCases;

    input[1][0] = computedM;
    input[1][1] = n;

    // 3 * 4
    // input[2][0] = 0;
    // input[2][1] = 0;
    // input[2][2] = 0;
    // input[2][3] = 1;

    // input[3][0] = 0;
    // input[3][1] = 0;
    // input[3][2] = 1;
    // input[3][3] = 1;

    // input[4][0] = 0;
    // input[4][1] = 1;
    // input[4][2] = 1;
    // input[4][3] = 0;

    // input[2][0] = 1;
    // input[2][1] = 0;
    // input[2][2] = 1;
    // input[2][3] = 0;

    // input[3][0] = 0;
    // input[3][1] = 1;
    // input[3][2] = 1;
    // input[3][3] = 1;

    // input[4][0] = 1;
    // input[4][1] = 1;
    // input[4][2] = 1;
    // input[4][3] = 1;

    // input[2][0] = 1;
    // input[2][1] = 1;
    // input[2][2] = 1;
    // input[2][3] = 0;

    // input[3][0] = 0;
    // input[3][1] = 1;
    // input[3][2] = 0;
    // input[3][3] = 0;

    // input[4][0] = 1;
    // input[4][1] = 0;
    // input[4][2] = 0;
    // input[4][3] = 0;

    // 4*5

    // input[2][0] = 1;
    // input[2][1] = 1;
    // input[2][2] = 1;
    // input[2][3] = 0;
    // input[2][4] = 1;

    // input[3][0] = 0;
    // input[3][1] = 1;
    // input[3][2] = 0;
    // input[3][3] = 0;
    // input[3][4] = 0;

    // input[4][0] = 1;
    // input[4][1] = 0;
    // input[4][2] = 0;
    // input[4][3] = 0;
    // input[4][4] = 1;

    // input[5][0] = 0;
    // input[5][1] = 1;
    // input[5][2] = 1;
    // input[5][3] = 0;
    // input[5][4] = 1;

    // 5*6

    // input[2][0] = 1;
    // input[2][1] = 1;
    // input[2][2] = 1;
    // input[2][3] = 0;
    // input[2][4] = 1;
    // input[2][5] = 1;

    // input[3][0] = 0;
    // input[3][1] = 1;
    // input[3][2] = 0;
    // input[3][3] = 0;
    // input[3][4] = 0;
    // input[3][5] = 0;

    // input[4][0] = 1;
    // input[4][1] = 0;
    // input[4][2] = 0;
    // input[4][3] = 0;
    // input[4][4] = 1;
    // input[4][5] = 1;

    // input[5][0] = 0;
    // input[5][1] = 1;
    // input[5][2] = 1;
    // input[5][3] = 0;
    // input[5][4] = 1;
    // input[5][5] = 1;

    // input[6][0] = 0;
    // input[6][1] = 1;
    // input[6][2] = 0;
    // input[6][3] = 0;
    // input[6][4] = 1;
    // input[6][5] = 0;

    // 6 * 7

    input[2][0] = 1;
    input[2][1] = 1;
    input[2][2] = 1;
    input[2][3] = 0;
    input[2][4] = 1;
    input[2][5] = 1;
    input[2][6] = 0;

    input[3][0] = 0;
    input[3][1] = 1;
    input[3][2] = 0;
    input[3][3] = 0;
    input[3][4] = 0;
    input[3][5] = 0;
    input[3][6] = 1;

    input[4][0] = 1;
    input[4][1] = 0;
    input[4][2] = 0;
    input[4][3] = 0;
    input[4][4] = 1;
    input[4][5] = 1;
    input[4][6] = 1;

    input[5][0] = 0;
    input[5][1] = 1;
    input[5][2] = 1;
    input[5][3] = 0;
    input[5][4] = 1;
    input[5][5] = 1;
    input[5][6] = 0;

    input[6][0] = 0;
    input[6][1] = 1;
    input[6][2] = 0;
    input[6][3] = 0;
    input[6][4] = 1;
    input[6][5] = 0;
    input[6][6] = 0;

    input[7][0] = 1;
    input[7][1] = 1;
    input[7][2] = 0;
    input[7][3] = 0;
    input[7][4] = 1;
    input[7][5] = 1;
    input[7][6] = 0;
    // --
    input[8][0] = -1;
    input[8][1] = -1;
    input[8][2] = -1;
    input[8][3] = -1;
    input[8][4] = -1;
    input[8][5] = -1;
    input[8][6] = -1;

    input[9][0] = 1;
    input[9][1] = 1;
    input[9][2] = 1;
    input[9][3] = 0;
    input[9][4] = 1;
    input[9][5] = 1;
    input[9][6] = 0;

    input[10][0] = 0;
    input[10][1] = 1;
    input[10][2] = 0;
    input[10][3] = 0;
    input[10][4] = 0;
    input[10][5] = 0;
    input[10][6] = 1;

    input[11][0] = 1;
    input[11][1] = 0;
    input[11][2] = 0;
    input[11][3] = 0;
    input[11][4] = 1;
    input[11][5] = 1;
    input[11][6] = 1;

    input[12][0] = 0;
    input[12][1] = 1;
    input[12][2] = 1;
    input[12][3] = 0;
    input[12][4] = 1;
    input[12][5] = 1;
    input[12][6] = 0;

    input[13][0] = 1;
    input[13][1] = 1;
    input[13][2] = 1;
    input[13][3] = 0;
    input[13][4] = 0;
    input[13][5] = 0;
    input[13][6] = 0;

    input[14][0] = 0;
    input[14][1] = 1;
    input[14][2] = 1;
    input[14][3] = 0;
    input[14][4] = 1;
    input[14][5] = 0;
    input[14][6] = 0;

    console.log('Input');
    console.table(input);
    console.log('Processing the input');
    const output = processInputAndGenerateOutput(input);
    console.table(output);
  }
}

const createATemplateArrayStructure = (m: number, n: number): number[][] =>
  new Array(m).fill(0).map(() => new Array(n).fill(0));

// const processInputAndGenerateOutput = (input: number[][]): number[][] => {
//   const m: number = input[1][0];
//   const n: number = input[1][1];
//   const output: number[][] = createATemplateArrayStructure(m - 2, n);
//   let outputRowIndex: number = 0;
//   console.log('Template Output Structure');
//   console.table(output);
//   let previousOccurenceOfWhite: number = 0;
//   let currentOccurrenceOfWhite: number = 0;
//   // eslint-disable-next-line no-unused-vars
//   const noOfTestCases: number = input[0][0];

//   for (let index = m - 3; index < input.length; index++) {
//     const rowData: number[] = input[index];
//     previousOccurenceOfWhite = 0;
//     for (let ind = 0; ind < rowData.length; ind++) {
//       if (rowData[ind] !== null && rowData[ind] !== undefined) {
//         if (ind <= currentOccurrenceOfWhite) {
//           currentOccurrenceOfWhite = findOccurenceOfWhiteFromGivenIndex(
//             ind === currentOccurrenceOfWhite ?
//               previousOccurenceOfWhite + 1 :
//               previousOccurenceOfWhite,
//             rowData,
//           );
//         }

//         let computedOuput: number = currentOccurrenceOfWhite - ind;
//         computedOuput =
//           computedOuput > 0 ? computedOuput : ind - currentOccurrenceOfWhite;
//         if (rowData[ind] === 1) {
//           output[outputRowIndex][ind] = 0;
//         } else {
//           output[outputRowIndex][ind] = computedOuput;
//         }
//         previousOccurenceOfWhite = currentOccurrenceOfWhite;
//       }
//     }
//     outputRowIndex++;
//   }

//   return output;
// };

// const findOccurenceOfWhiteFromGivenIndex = (
//     currentIndexOfWhite: number,
//     rowData: number[],
// ): number => {
//   for (let index = currentIndexOfWhite; index < rowData.length; index++) {
//     if (rowData[index] === 1) {
//       return index;
//     }
//   }
//   return currentIndexOfWhite;
// };

// const processInputAndGenerateOutput = (input: number[][]): number[][] => {
//   const m: number = input[1][0];
//   const n: number = input[1][1];
//   const output: number[][] = createATemplateArrayStructure(m - 2, n);
//   let outputRowIndex: number = 0;
//   console.log('Template Output Structure');
//   console.table(output);
//   let previousOccurenceOfWhite: number = 0;
//   let currentOccurrenceOfWhite: number = 0;
//   let allOccurrencesOfWhite: number[] = [];
//   // eslint-disable-next-line no-unused-vars
//   const noOfTestCases: number = input[0][0];

//   for (let index: number = 2; index < input.length; index++) {
//     const rowData: number[] = input[index];
//     // previousOccurenceOfWhite = 0;
//     allOccurrencesOfWhite = findOccurenceOfWhites(rowData);
//     for (let ind: number = 0; ind < rowData.length; ind++) {
//       if (rowData[ind] !== null && rowData[ind] !== undefined) {
//         if (ind === 0) {
//           currentOccurrenceOfWhite =
//             allOccurrencesOfWhite.length > 0 ? allOccurrencesOfWhite[0] : 0;
//         } else if (ind > currentOccurrenceOfWhite) {
//           previousOccurenceOfWhite = currentOccurrenceOfWhite;
//           currentOccurrenceOfWhite =
//             allOccurrencesOfWhite.length > 1 &&
//             ind < allOccurrencesOfWhite.length ?
//               allOccurrencesOfWhite[ind] :
//               ind === allOccurrencesOfWhite.length ?
//               allOccurrencesOfWhite[ind - 1] :
//               ind > allOccurrencesOfWhite.length ?
//               allOccurrencesOfWhite[ind + 1] :
//               currentOccurrenceOfWhite;
//         }

//         if (rowData[ind] === 1) {
//           output[outputRowIndex][ind] = 0;
//         } else {
//           const computedCount =
//             ind > 0 ?
//               Math.min(currentOccurrenceOfWhite, previousOccurenceOfWhite) :
//               currentOccurrenceOfWhite;
//           output[outputRowIndex][ind] = Math.abs(computedCount - ind);
//         }
//       }
//     }
//     outputRowIndex++;
//   }

//   return output;
// };

const processInputAndGenerateOutput = (input: number[][]): number[][] => {
  const m: number = input[1][0];
  const n: number = input[1][1];
  const output: number[][] = createATemplateArrayStructure(m - 2, n);
  let outputRowIndex: number = 0;
  console.log('Template Output Structure');
  console.table(output);
  let previousOccurenceOfWhite: number = -1;
  let currentOccurrenceOfWhite: number = 0;
  let allOccurrencesOfWhite: number[] = [];
  // eslint-disable-next-line no-unused-vars
  const noOfTestCases: number = input[0][0];
  let indexOfCurrentOccurrenceOfWhite: number = 0;

  for (let index: number = 2; index < input.length; index++) {
    const rowData: number[] = input[index];
    // previousOccurenceOfWhite = 0;
    allOccurrencesOfWhite = findOccurenceOfWhites(rowData);
    for (let ind: number = 0; ind < rowData.length; ind++) {
      if (rowData[ind] !== -1) {
        currentOccurrenceOfWhite =
          allOccurrencesOfWhite[indexOfCurrentOccurrenceOfWhite];
        // if (ind === 0) {
        //   currentOccurrenceOfWhite =
        //     allOccurrencesOfWhite.length > 0 ? allOccurrencesOfWhite[0] : 0;
        // } else if (ind > currentOccurrenceOfWhite) {
        //   previousOccurenceOfWhite = currentOccurrenceOfWhite;
        //   currentOccurrenceOfWhite =
        //     allOccurrencesOfWhite.length > 1 &&
        //     ind < allOccurrencesOfWhite.length ?
        //       allOccurrencesOfWhite[ind] :
        //       ind === allOccurrencesOfWhite.length ?
        //       allOccurrencesOfWhite[ind - 1] :
        //       ind > allOccurrencesOfWhite.length ?
        //       allOccurrencesOfWhite[ind + 1] :
        //       currentOccurrenceOfWhite;
        // }

        if (rowData[ind] === 1) {
          output[outputRowIndex][ind] = 0;
          indexOfCurrentOccurrenceOfWhite++;
          previousOccurenceOfWhite = currentOccurrenceOfWhite;
        } else {
          output[outputRowIndex][ind] = computeOutput(
              currentOccurrenceOfWhite,
              previousOccurenceOfWhite,
              ind,
          );
        }
      } else {
        output[outputRowIndex][ind] = rowData[ind];
      }
    }
    outputRowIndex++;
    indexOfCurrentOccurrenceOfWhite = 0;
  }

  return output;
};

const computeOutput = (
    currentOccurrenceOfWhite: number,
    previousOccurenceOfWhite: number,
    index: number,
): number => {
  if (previousOccurenceOfWhite < 0) {
    return Math.abs(index - currentOccurrenceOfWhite);
  } else if (
    typeof currentOccurrenceOfWhite === 'undefined' &&
    previousOccurenceOfWhite >= 0
  ) {
    return Math.abs(index - previousOccurenceOfWhite);
  } else if (
    typeof previousOccurenceOfWhite === 'undefined' &&
    currentOccurrenceOfWhite >= 0
  ) {
    return Math.abs(index - currentOccurrenceOfWhite);
  }
  return Math.min(
      Math.abs(index - currentOccurrenceOfWhite),
      Math.abs(index - previousOccurenceOfWhite),
  );
};
const findOccurenceOfWhites = (rowData: number[]): number[] => {
  const occurencesOfWhitesInRowData: Array<number> = [];
  for (let index: number = 0; index < rowData.length; index++) {
    if (rowData[index] === 1) {
      occurencesOfWhitesInRowData.push(index);
    }
  }
  return occurencesOfWhitesInRowData;
};

App.start();
