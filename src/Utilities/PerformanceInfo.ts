import chalk from 'chalk';
/**
 * Class that process Performance Info
 */
export class PerformanceInfo {
  /**
   *
   * @param {any} tStartTime Starting time of the process
   * @param {string} perfDataOf What process is the perf data to be printed for
   * Calculates the actual time taken for the process to complete (end - start)
   * and print to output.
   */
  public static printPerformanceInfo(
      tStartTime: any,
      perfDataOf: string
  ): void {
    const tProcessStop = process.hrtime(tStartTime);
    process.stdout.write(
        chalk.magenta(
            // eslint-disable-next-line max-len
            `\nTime Taken to ${chalk.bold(chalk.underline(perfDataOf))} is: ${chalk.bgHex('#FFFFFF').black(`${
              (tProcessStop[0] * 1e9 + tProcessStop[1]) / 1e9 } seconds`)}.`
        )
    );
  }
}
