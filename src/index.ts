import {
  calculateDistanceAndPrintOutput,
  calculateDistanceByAlternateApproachAndPrintOutput
} from './Utilities/Helper';

import {Parser} from './Utilities/Parser';
import {PerformanceInfo} from './Utilities/PerformanceInfo';
import chalk from 'chalk';
import readline from 'readline';
import {throwError} from './Utilities/ErrorHandler';

/**
 * Reads Bitmap input from Input Text and processes it.
 */
export class BitmapProcessor {
  public oParser: Parser = new Parser();

  /**
   * Starts the process.
   */
  public start(): void {
    const tFullProcessStart = process.hrtime();
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    /**
     * Read input per line and parse it.
     * Throw error while reading and parsing the line.
     */
    rl.on('line', (oLine: any) => {
      try {
        this.oParser.parse(oLine.trim());
      } catch (oError: any) {
        throwError(oError);
      }
    });

    // Handle File Read error
    rl.on('error', () => {
      console.log('Error while reading the lines from file.');
      process.exit(0);
    });

    // On Read Close, start calculating distance and print result.
    rl.on('close', () => {
      const tCalculationProcessStart = process.hrtime();

      if (process.argv.includes('alternateApproach')) {
        /**
         * Calculates distances using the Alternate Approach
         * algorithm and print output.
         */
        calculateDistanceByAlternateApproachAndPrintOutput(
            this.oParser.getBitMapArrayToBeParsed()
        );
      } else {
        /**
         * Calculates distances and print output.
         */
        calculateDistanceAndPrintOutput(
            this.oParser.getBitMapArrayToBeParsed()
        );
      }

      /**
       * Printing Performance Info
       */
      process.stdout.write(chalk.magenta('Performance Info:'));
      process.stdout.write('\n');
      process.stdout.write(chalk.magenta('-----------------'));
      PerformanceInfo.printPerformanceInfo(
          tCalculationProcessStart,
          'Calculate Distance only'
      );
      PerformanceInfo.printPerformanceInfo(
          tFullProcessStart,
          'Complete Full Process (Read data + Calculate Distance)'
      );
      process.stdout.write('\n');
    });
  }
}
// Start the Process.
new BitmapProcessor().start();
