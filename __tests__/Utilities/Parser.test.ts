/* eslint-disable no-unused-vars */
import {Parser} from '../../src/Utilities/Parser';
import chalk from 'chalk';

enum Scenarios {
  invalidTestCase,
  invalidBitmapSize,
  multipleTestCases,
  bitmapColumnSizeError,
  noWhitePixelError,
}
let oParser: Parser;
const seedDataToParser = (
    Scenario?: Scenarios | undefined,
    noOfTestCases: String = '1'
): Parser => {
  oParser = new Parser();
  if (Scenario === Scenarios.invalidTestCase) {
    oParser.parse('0');
  } else {
    oParser.parse(noOfTestCases);
  }
  if (Scenario === Scenarios.invalidBitmapSize) {
    oParser.parse('3 183');
  } else {
    oParser.parse('3 4');
  }
  if (Scenario === Scenarios.noWhitePixelError) {
    oParser.parse('0000');
  } else {
    oParser.parse('0001');
  }
  oParser.parse('0011');
  oParser.parse('0110');
  if (Scenario === Scenarios.bitmapColumnSizeError) {
    oParser.parse('00110');
  }
  if (Scenario === Scenarios.multipleTestCases) {
    oParser.parse('');
    oParser.parse('3 4');
    oParser.parse('0001');
    oParser.parse('0011');
    oParser.parse('0110');
  }
  return oParser;
};

describe('Parser Tests', () => {
  it('Successful Input Parsing - Single Test case', () => {
    const oParser: Parser = seedDataToParser();
    const expectedArray: String[][][] = [
      [
        ['0', '0', '0', '1'],
        ['0', '0', '1', '1'],
        ['0', '1', '1', '0']
      ]
    ];
    expect(oParser.getBitMapArrayToBeParsed()).toStrictEqual(expectedArray);
  });

  it('Successful Input Parsing - Multiple Test cases', () => {
    const oParser: Parser = seedDataToParser(Scenarios.multipleTestCases, '2');
    const expectedArray: String[][][] = [
      [
        ['0', '0', '0', '1'],
        ['0', '0', '1', '1'],
        ['0', '1', '1', '0']
      ],

      [
        ['0', '0', '0', '1'],
        ['0', '0', '1', '1'],
        ['0', '1', '1', '0']
      ]
    ];
    expect(oParser.getBitMapArrayToBeParsed()).toStrictEqual(expectedArray);
  });

  it('Invalid No of test case while Input Parsing', () => {
    expect(() => {
      seedDataToParser(Scenarios.invalidTestCase);
    }).toThrowError();
  });

  it('Invalid Bitmap size while Input Parsing', () => {
    expect(() => {
      seedDataToParser(Scenarios.invalidBitmapSize);
    }).toThrowError();
  });

  it('Failure Input Parsing - No Test cases < Actual No of Test Cases', () => {
    expect.assertions(1); // expects one failure
    try {
      seedDataToParser(Scenarios.multipleTestCases);
    } catch (oError: any) {
      expect(oError.message).toBe(
          chalk.bgHex('#FFFF00').red(
              chalk.bold(
                  // eslint-disable-next-line max-len
                  `Error!! Actual No. of Tests cases are more than defined no. of Test cases.`
              )
          )
      );
    }
  });

  it('Failure Input Parsing - Bitmap row size < row size', () => {
    expect.assertions(1);
    try {
      seedDataToParser(Scenarios.bitmapColumnSizeError);
    } catch (oError: any) {
      expect(oError.message).toBe(
          chalk.bgHex('#FFFF00').red(
              chalk.bold(
                  // eslint-disable-next-line max-len
                  `Error!! Actual Bitmap size is more than defined range`
              )
          )
      );
    }
  });

  it('Test No White Pixel scenario', () => {
    expect.assertions(1); // expects one failure
    try {
      seedDataToParser(Scenarios.noWhitePixelError);
    } catch (oError: any) {
      expect(oError.message).toBe(
          // eslint-disable-next-line max-len
          chalk.bgHex('#FFFF00').red(chalk.bold(`Error!! No White Pixel Found.`))
      );
    }
  });
});
