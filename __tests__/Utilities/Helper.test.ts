import {
  calculateDistanceAndPrintOutput,
  calculateDistanceByAlternateApproachAndPrintOutput
} from '../../src/Utilities/Helper';
describe('Test Helper Tests', () => {
  it('Test calculating distance of an Array', () => {
    const oHelper = require('../../src/Utilities/Helper');
    const aInputArray: String[][][] = [
      [
        ['0', '0', '0', '1'],
        ['1', '0', '1', '1'],
        ['0', '0', '1', '0'],
        ['1', '1', '0', '1']
      ]
    ];
    const oPrintSpy = jest.spyOn(oHelper, 'printOutput');
    const aExpectedDistances: String[][][] = [
      [
        ['1', '2', '1', '0'],
        ['0', '1', '0', '0'],
        ['1', '1', '0', '1'],
        ['0', '0', '1', '0']
      ]
    ];
    calculateDistanceAndPrintOutput(aInputArray);
    expect(oPrintSpy.mock.calls[0]).toEqual(aExpectedDistances);
  });

  it('Test calculating distance of an Array - using Alternate Approach', () => {
    const oHelper = require('../../src/Utilities/Helper');
    const aInputArray: String[][][] = [
      [
        ['0', '0', '0', '1', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '0', '1', '1', '0'],
        ['0', '1', '1', '1', '0'],
        ['1', '0', '1', '1', '1']
      ]
    ];
    const oPrintSpy = jest.spyOn(oHelper, 'printOutput');
    const aExpectedDistances: String[][][] = [
      [
        ['1', '2', '1', '0', '1'],
        ['0', '1', '0', '0', '0'],
        ['0', '1', '0', '0', '1'],
        ['1', '0', '0', '0', '1'],
        ['0', '1', '0', '0', '0']
      ]
    ];
    calculateDistanceByAlternateApproachAndPrintOutput(aInputArray);
    expect(oPrintSpy.mock.calls[1]).toEqual(aExpectedDistances);
  });
});
