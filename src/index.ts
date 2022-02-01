/**
 * Hello World Project
 */
class App {
  /** Entry point of our app **/
  public static start() {
    const m: number = 6;
    const n: number = 5;
    // const m: number = 5;
    // const n: number = 4;
    // eslint-disable-next-line no-unused-vars
    const input: number[][] = createATemplateArrayStructure(m, n);
    input[0][0] = 1;

    input[1][0] = m;
    input[1][1] = n;

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

    // 5*6

    input[2][0] = 1;
    input[2][1] = 1;
    input[2][2] = 1;
    input[2][3] = 0;
    input[2][4] = 1;

    input[3][0] = 0;
    input[3][1] = 1;
    input[3][2] = 0;
    input[3][3] = 0;
    input[3][4] = 0;

    input[4][0] = 1;
    input[4][1] = 0;
    input[4][2] = 0;
    input[4][3] = 0;
    input[4][4] = 1;

    input[5][0] = 0;
    input[5][1] = 1;
    input[5][2] = 1;
    input[5][3] = 0;
    input[5][4] = 1;

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

const processInputAndGenerateOutput = (input: number[][]): number[][] => {
  const m: number = input[1][0];
  const n: number = input[1][1];
  const output: number[][] = createATemplateArrayStructure(m - 2, n);
  let outputRowIndex: number = 0;
  console.log('Template Output Structure');
  console.table(output);
  let previousOccurenceOfWhite: number = 0;
  let currentOccurrenceOfWhite: number = 0;
  let allOccurrencesOfWhite: number[] = [];
  // eslint-disable-next-line no-unused-vars
  const noOfTestCases: number = input[0][0];

  for (let index: number = 2; index < input.length; index++) {
    const rowData: number[] = input[index];
    // previousOccurenceOfWhite = 0;
    allOccurrencesOfWhite = findOccurenceOfWhites(rowData);
    for (let ind: number = 0; ind < rowData.length; ind++) {
      if (rowData[ind] !== null && rowData[ind] !== undefined) {
        if (ind === 0) {
          currentOccurrenceOfWhite =
            allOccurrencesOfWhite.length > 0 ? allOccurrencesOfWhite[0] : 0;
        } else if (ind > currentOccurrenceOfWhite) {
          previousOccurenceOfWhite = currentOccurrenceOfWhite;
          currentOccurrenceOfWhite =
            allOccurrencesOfWhite.length > 1 &&
            ind < allOccurrencesOfWhite.length ?
              allOccurrencesOfWhite[ind] :
              ind === allOccurrencesOfWhite.length ?
              allOccurrencesOfWhite[ind - 1] :
              ind > allOccurrencesOfWhite.length ?
              allOccurrencesOfWhite[ind + 1] :
              currentOccurrenceOfWhite;
        }

        if (rowData[ind] === 1) {
          output[outputRowIndex][ind] = 0;
        } else {
          const computedCount =
            ind > 0 ?
              Math.min(currentOccurrenceOfWhite, previousOccurenceOfWhite) :
              currentOccurrenceOfWhite;
          output[outputRowIndex][ind] = Math.abs(computedCount - ind);
        }
      }
    }
    outputRowIndex++;
  }

  return output;
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
