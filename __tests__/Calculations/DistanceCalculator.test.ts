import {DistanceCalculator} from '../../src/Calculations/DistanceCalculator';

describe('Test Distance Calculator', () => {
  it('Test One Test case scenario', () => {
    const inputBitMapArray: String[][] = [
      ['0', '0', '0', '1'],
      ['0', '0', '1', '1'],
      ['0', '1', '1', '0']
    ];
    const outputDistancesArray: String[][] = [
      ['3', '2', '1', '0'],
      ['2', '1', '0', '0'],
      ['1', '0', '0', '1']
    ];
    expect(
        DistanceCalculator.calculateDistances(inputBitMapArray)
    ).toStrictEqual(outputDistancesArray);
  });
});
