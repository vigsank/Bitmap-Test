// eslint-disable-next-line max-len
import {AlternateApproachDistanceCalculator} from '../../src/Calculations/AlternateApproachDistanceCalculator';

describe('Test Distance Calculator', () => {
  it('Expect desired distances for the input', () => {
    const inputBitMapArray: String[][] = [
      ['0', '0', '0', '1', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '0', '1', '1', '0'],
      ['0', '1', '1', '1', '0'],
      ['1', '0', '1', '1', '1']
    ];
    const outputDistancesArray: String[][] = [
      ['1', '2', '1', '0', '1'],
      ['0', '1', '0', '0', '0'],
      ['0', '1', '0', '0', '1'],
      ['1', '0', '0', '0', '1'],
      ['0', '1', '0', '0', '0']
    ];
    expect(
        AlternateApproachDistanceCalculator.calculateDistances(inputBitMapArray)
    ).toStrictEqual(outputDistancesArray);
  });
});
