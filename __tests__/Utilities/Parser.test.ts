/* eslint-disable no-unused-vars */
import {Parser} from '../../src/Utilities/Parser';

enum Scenarios {
  invalidTestCase,
  invalidBitmapSize,
  multipleTestCases
}

const seedDataToParser = (Scenario?: any): Parser => {
  const oParser: Parser = new Parser();
  if (Scenario === Scenarios.invalidTestCase) {
    oParser.parse('0');
  } else {
    oParser.parse('1');
  }
  if (Scenario === Scenarios.invalidBitmapSize) {
    oParser.parse('3 183');
  } else {
    oParser.parse('3 4');
  }
  oParser.parse('0001');
  oParser.parse('0011');
  oParser.parse('0110');
  if (Scenario === Scenarios.multipleTestCases) {
    oParser.parse('');
    oParser.parse('0001');
    oParser.parse('0011');
    oParser.parse('0110');
  }
  return oParser;
};

describe('Parser Tests', () => {
  it('Successful Input Parsing - Single Test case', () => {
    const oParser: Parser = seedDataToParser();
    const expectedArray: String[][] = [
      ['0', '0', '0', '1'],
      ['0', '0', '1', '1'],
      ['0', '1', '1', '0']
    ];
    expect(oParser.getParsedArray()).toStrictEqual(expectedArray);
  });

  it('Successful Input Parsing - Multiple Test cases', () => {
    const oParser: Parser = seedDataToParser(Scenarios.multipleTestCases);
    const expectedArray: String[][] = [
      ['0', '0', '0', '1'],
      ['0', '0', '1', '1'],
      ['0', '1', '1', '0'],
      [],
      ['0', '0', '0', '1'],
      ['0', '0', '1', '1'],
      ['0', '1', '1', '0']
    ];
    expect(oParser.getParsedArray()).toStrictEqual(expectedArray);
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
});
