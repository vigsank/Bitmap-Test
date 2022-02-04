import {DistanceCalculator} from './Calculations/DistanceCalculator';
import {Parser} from './Utilities/Parser';
import {PerformanceInfo} from './Utilities/PerformanceInfo';
import readline from 'readline';

/**
 * Reads Bitmap input from Input Text and processes it.
 */
class BitmapProcessor {
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
        if (
          oError &&
          oError.hasOwnProperty('type') &&
          oError.hasOwnProperty('message')
        ) {
          process.stdout.write(oError.message);
          process.exit(0);
        } else {
          process.stdout.write(oError);
          process.exit(0);
        }
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
      process.stdout.write('Performance Info:');
      process.stdout.write('\n');
      process.stdout.write('-----------------');
      PerformanceInfo.printPerformanceInfo(
          tCalculationProcessStart,
          'Calculate Distance only'
      );
      PerformanceInfo.printPerformanceInfo(
          tFullProcessStart,
          'Complete Full Process (Read data + Calculate Distance)'
      );
    });
  }

  /**
   * @param {String} aComputedDistances Output Array to be printed as Standard
   * Output
   * Prints the output array.
   */
  private printOutput(aComputedDistances: String[][]): void {
    process.stdout.write('Computed Distances (row based only) :');
    process.stdout.write('\n');
    process.stdout.write('-------------------------------------');
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
        process.stdout.write(aComputedDistances[nRowInd][nColInd] + ' ');
      }
      process.stdout.write('\n');
    }
    process.stdout.write('\n');
  }
}

// Start the Process.
new BitmapProcessor().start();
