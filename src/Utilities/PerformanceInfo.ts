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
    process.stdout.write('\n');
    process.stdout.write(
        `Time Taken to ${perfDataOf} is: ${
          (tProcessStop[0] * 1e9 + tProcessStop[1]) / 1e9
        } seconds`
    );
  }
}
