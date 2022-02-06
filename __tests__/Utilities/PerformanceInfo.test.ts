import {PerformanceInfo} from '../../src/Utilities/PerformanceInfo';
import chalk from 'chalk';

describe('Performance Info Tests', () => {
  it('Test Print Performance Info method', () => {
    const startTimeMockValue = 3;
    const perfDataOf = 'Run Performance Info Test';
    jest.spyOn(process.stdout, 'write');
    jest.spyOn(process, 'hrtime').mockImplementation((startTime) => {
      expect(startTime).toBe(startTimeMockValue);
      return [5, 0];
    });
    PerformanceInfo.printPerformanceInfo(
        startTimeMockValue,
        perfDataOf
    );
    const expectedPerfData: String = chalk.magenta(
        // eslint-disable-next-line max-len
        `\nTime Taken to ${chalk.bold(chalk.underline(perfDataOf))} is: ${chalk
            .bgHex('#FFFFFF')
            .black(`5 seconds`)}.`
    );
    expect(process.stdout.write).toHaveBeenCalledWith(expectedPerfData);
  });
});

