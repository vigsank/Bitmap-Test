import {Constants} from '../Utilities/Constants';
import {throwError} from '../Utilities/ErrorHandler';
import {whitePixelNotFoundErrorInTheRow} from '../Utilities/ErrorHandler';

/**
 * Class Responsible for calculating the distance between two pixels.
 * This calculates distance between a pixel and to it's nearest White (1)
 * pixel (0).
 * The nearest is calculated within that row only and the nearest White (1)
 * can either be before it or after it.
 * Distance is 0 if the pixel under process is itself a White (1)
 */
export class DistanceCalculator {
  /**
   * @param {String} aBitMapArray Input Array that was a result of
   * parsing the input.
   *
   * @return {String} Output Array after distance computation (row wise).
   */
  public static calculateDistances(aBitMapArray: String[][]): String[][] {
    // eslint-disable-next-line no-unused-vars
    const aComputedDistances: String[][] = [];
    let nPreviousOccurrenceOfWhitePixel: number = -1;
    let nNextOccurrenceOfWhitePixel: number = 0;
    let aAllOccurrencesOfWhitePixelsInCurrentRow: number[] = [];
    /**
     * Index for aAllOccurrencesOfWhitePixelsInCurrentRow
     */
    let aIndexForOccurrencesOfWhiteArray: number = 0;
    /**
     * Iterates through the input array where each element is an array
     * representing each line of a test case from input.
     */
    for (
      let nRowIterator: number = 0;
      nRowIterator < aBitMapArray.length;
      nRowIterator++
    ) {
      const aDistances: String[] = [];
      const aCurrentRowPixels: String[] = aBitMapArray[nRowIterator];
      /**
       * If the length of current row of pixels is zero
       * (basically a empty line as per input).
       * We ignore that row from calculation process
       * rather add empty row to output array.
       */
      if (aCurrentRowPixels.length > 0) {
        /**
         * Compute all occurrences of white pixels from the current row.
         * This shall be used to compute nearest white pixel while iterating
         * through each pixel.
         */
        aAllOccurrencesOfWhitePixelsInCurrentRow =
          DistanceCalculator.findAllOccurrenceOfWhitePixelsInCurrentRow(
              aCurrentRowPixels
          );
        /**
         * Iterating through each pixel of the pixel row
         */
        for (
          let nCurrentRowIteratorIndex: number = 0;
          nCurrentRowIteratorIndex < aCurrentRowPixels.length;
          nCurrentRowIteratorIndex++
        ) {
          /**
           * Set next occurrence of White Pixel.
           * At start, this shall be the first element of
           * aAllOccurrencesOfWhitePixelsInCurrentRow. In subsequent iterations,
           * if the current pixel's index matches with Next Occurrence Of White
           * Pixel, then it's time to consider next occurrence of white also.
           * So current 'next occurrence' becomes 'previous occurrence'
           * and new 'next occurrence' will be next element from
           * aAllOccurrencesOfWhitePixelsInCurrentRow.
           *
           * Ex: aAllOccurrencesOfWhitePixelsInCurrentRow = [2,5]
           *
           * Iterations until first White pixel is hit:
           * ------------------------------------------
           * nNextOccurrenceOfWhitePixel = 2;
           * nPreviousOccurrenceOfWhitePixel = -1;
           *
           * Next / Previous is changed as below then
           * process continues again until next White pixel is hit:
           * ------------------------------------------------------
           * nNextOccurrenceOfWhitePixel = 5;
           * nPreviousOccurrenceOfWhitePixel = 2;
           *
           * And so on...
           */
          nNextOccurrenceOfWhitePixel =
            aAllOccurrencesOfWhitePixelsInCurrentRow[
                aIndexForOccurrencesOfWhiteArray
            ];

          /**
           * When a White pixel is encountered, the distance is Zero.
           * This is where the 'next occurrence' of White gets value of
           * 'previous occurrence' and aIndexForOccurrencesOfWhiteArray
           * is incremented.
           * This ensures in next iteration's start 'next occurrence' is
           * changed to real next occurrence (with respect to current pixel.)
           */
          if (
            Number(aCurrentRowPixels[nCurrentRowIteratorIndex]) ===
            Constants.WHITE_PIXEL_VALUE
          ) {
            aDistances.push('0');
            aIndexForOccurrencesOfWhiteArray++;
            nPreviousOccurrenceOfWhitePixel = nNextOccurrenceOfWhitePixel;
          } else {
            aDistances.push(
                String(
                    DistanceCalculator.computeRowBasedDistance(
                        nNextOccurrenceOfWhitePixel,
                        nPreviousOccurrenceOfWhitePixel,
                        nCurrentRowIteratorIndex
                    )
                )
            );
          }
        }
      } else {
        /**
         * If current row has no pixels rather empty row,
         * then output also needs an empty line. So inserting the same
         * empty row to output distances array also.
         */
        aDistances.push('');
      }
      aComputedDistances.push(aDistances);
      // reset before that next pixel row is taken for distance calculation.
      aIndexForOccurrencesOfWhiteArray = 0;
    }
    return aComputedDistances;
  }

  /**
   *
   * @param {String} aCurrentRowPixels Current Row in which
   * occurrences of White pixel(s) has to be found.
   * @return {Number} Number Array that has indexes of
   * White(s) in this input pixel row.
   * Iterates the pixel row and populates array of indexes of White pixel(s).
   */
  private static findAllOccurrenceOfWhitePixelsInCurrentRow = (
      aCurrentRowPixels: String[]
  ): number[] => {
    const aOccurrencesOfWhitesInPixelRow: number[] = [];
    for (
      let nCurrentRowIteratorIndex: number = 0;
      nCurrentRowIteratorIndex < aCurrentRowPixels.length;
      nCurrentRowIteratorIndex++
    ) {
      /**
       * Add index to aOccurrencesOfWhitesInPixelRow when a pixel in the row
       * is White (1)
       */
      if (
        Number(aCurrentRowPixels[nCurrentRowIteratorIndex]) ===
        Constants.WHITE_PIXEL_VALUE
      ) {
        aOccurrencesOfWhitesInPixelRow.push(nCurrentRowIteratorIndex);
      }
    }
    /**
     * After iterating, if no White pixels found, then throw error
     * as atleast each row should have atleast one White.
     */
    if (!aOccurrencesOfWhitesInPixelRow.length) {
      throwError(whitePixelNotFoundErrorInTheRow());
      // process.exit(0);
    }
    return aOccurrencesOfWhitesInPixelRow;
  };

  /**
   *
   * @param {number} nNextOccurrenceOfWhitePixel Next occurrence of white
   * with respect to current pixel's Index
   *
   * @param {number} nPreviousOccurrenceOfWhitePixel  Previous occurrence
   * of white with respect to current pixel's Index
   *
   * @param {number} nCurrentPixelIndex Current Pixel's Index
   *
   * @return {number} The nearest White's Index
   *
   * Using the nPreviousOccurrenceOfWhitePixel & nNextOccurrenceOfWhitePixel,
   * we compute the difference of them from current pixel's index
   * and return the minimum of the two differences which will be
   * the shortest distance of current pixel to nearest White (row based)
   */
  private static computeRowBasedDistance = (
      nNextOccurrenceOfWhitePixel: number,
      nPreviousOccurrenceOfWhitePixel: number,
      nCurrentPixelIndex: number
  ): number => {
    /**
     * If no nNextOccurrenceOfWhitePixel || nNextOccurrenceOfWhitePixel is
     * undefined but nPreviousOccurrenceOfWhitePixel exists, compute
     * shortest distance between current pixel and
     * nPreviousOccurrenceOfWhitePixel
     */
    if (
      nPreviousOccurrenceOfWhitePixel < 0 ||
      (typeof nPreviousOccurrenceOfWhitePixel === 'undefined' &&
        nNextOccurrenceOfWhitePixel >= 0)
    ) {
      return Math.abs(nCurrentPixelIndex - nNextOccurrenceOfWhitePixel);
    } else if (
      /**
       * If no nNextOccurrenceOfWhitePixel, compute shortest distance between
       * current pixel and nPreviousOccurrenceOfWhitePixel
       *
       *
       */
      typeof nNextOccurrenceOfWhitePixel === 'undefined' &&
      nPreviousOccurrenceOfWhitePixel >= 0
    ) {
      return Math.abs(nCurrentPixelIndex - nPreviousOccurrenceOfWhitePixel);
    }
    /**
     * When both next and previous occurrences of White pixels are available,
     * compute the minimum valued distance between current pixel and row-wise
     * previous and next White pixels.
     *
     * For Ex:
     * nNextOccurrenceOfWhitePixel = 5
     * nPreviousOccurrenceOfWhitePixel = 2
     * nCurrentPixelIndex = 4
     *
     * Result is 1 (since |4-5| is smaller than |4-2|).
     */
    return Math.min(
        Math.abs(nCurrentPixelIndex - nNextOccurrenceOfWhitePixel),
        Math.abs(nCurrentPixelIndex - nPreviousOccurrenceOfWhitePixel)
    );
  };
}
