import {DistanceCalculator} from './Calculations/DistanceCalculator';
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
        // process.exit(0);
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

      this.printOutput(
          DistanceCalculator.calculateDistances(this.oParser.getParsedArray())
      );
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

  /**
   * @param {String} aComputedDistances Output Array to be printed as Standard
   * Output
   * Prints the output array.
   */
  private printOutput(aComputedDistances: String[][]): void {
    process.stdout.write(
        chalk.green(
            chalk.bold('Computed Distances (row based calculations only) :')
        )
    );
    process.stdout.write('\n');
    process.stdout.write(chalk.bold('-------------------------------------'));
    process.stdout.write('\n\n');
    for (
      let nRowInd: number = 0;
      nRowInd < aComputedDistances.length;
      nRowInd++
    ) {
      for (
        let nColInd: number = 0;
        nColInd < aComputedDistances[nRowInd].length;
        nColInd++
      ) {
        process.stdout.write(
            chalk.green(aComputedDistances[nRowInd][nColInd] + ' ')
        );
      }
      process.stdout.write('\n');
    }
    process.stdout.write('\n');
  }
}

// Start the Process.
new BitmapProcessor().start();
