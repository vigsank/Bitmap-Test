/**
 * Class Responsible for calculating the distance between two pixels.
 * This calculates distance between a pixel and to it's nearest White (1)
 * pixel in any row or any column.
 * Distance is 0 if the pixel under process is itself a White (1)
 */
export class AlternateApproachDistanceCalculator {
  /**
   * @param {String} aBitMapArray Input Array that was a result of
   * parsing the input.
   *
   * @return {String} Output Array after distance computation.
   */
  public static calculateDistances(aBitMapArray: String[][]): String[][] {
    /**
     * Deep copying the input so utilize the same structure of that array
     * for output.
     */
    const aComputedDistances: String[][] = JSON.parse(
        JSON.stringify(aBitMapArray)
    );

    /**
     * Iterate through aBitMapArray and take each row out
     * to calculate distances using each pixel of that row
     * against entire aBitMapArray
     */
    for (
      let nInputRowIteratorIndex: number = 0;
      nInputRowIteratorIndex < aBitMapArray.length;
      nInputRowIteratorIndex++
    ) {
      let nDistance: number = 0;
      const aRow: String[] = aBitMapArray[nInputRowIteratorIndex];
      /**
       * Iterate through all pixels of the current row
       * to calculate distances against entire aBitMapArray
       */
      for (
        let nRowElementsIndex: number = 0;
        nRowElementsIndex < aRow.length;
        nRowElementsIndex++
      ) {
        /**
         * If a pixel is white, then distance is zero.
         * So calculating distance only if pixel is
         * black
         */
        if (Number(aRow[nRowElementsIndex]) !== 1) {
          /**
           * Now that a pixel is ready to scanned across,
           * we run that pixel against the entire bitmap again
           * and find which is the nearest pixel and for the
           * encountered white pixels, use the formula
           * d(p1,p2)=|i1-i2|+|j1-j2| and calculate the distance.
           *
           * Scanning through the entire bitmap is nothing but
           * going through each pixel by looping through all
           * rows and each pixel in a row. The below two
           * 'for's does the same.
           */
          for (
            let nRowLevelWhitePixelFinderIndex: number = 0;
            nRowLevelWhitePixelFinderIndex < aBitMapArray.length;
            nRowLevelWhitePixelFinderIndex++
          ) {
            for (
              let nColumnLevelWhitePixelFinderIndex: number = 0;
              nColumnLevelWhitePixelFinderIndex <
              aBitMapArray[nRowLevelWhitePixelFinderIndex].length;
              nColumnLevelWhitePixelFinderIndex++
            ) {
              /**
               * If White pixel is encountered, calculate the distance.
               */
              if (
                Number(
                    aBitMapArray[nRowLevelWhitePixelFinderIndex][
                        nColumnLevelWhitePixelFinderIndex
                    ]
                ) === 1
              ) {
                /**
                 * if distance is still in it's initialized value,
                 * then simply calculate distance.
                 *
                 * If distance is already available, not necessarily that is the
                 * shortest and we find min between already existing distance &
                 * the current.
                 */

                if (nDistance === 0) {
                  nDistance =
                    Math.abs(
                        nRowLevelWhitePixelFinderIndex - nInputRowIteratorIndex
                    ) +
                    Math.abs(
                        nRowElementsIndex - nColumnLevelWhitePixelFinderIndex
                    );
                } else {
                  nDistance = Math.min(
                      nDistance,
                      Math.abs(
                          // eslint-disable-next-line max-len
                          nRowLevelWhitePixelFinderIndex - nInputRowIteratorIndex
                      ) +
                      Math.abs(
                          nRowElementsIndex - nColumnLevelWhitePixelFinderIndex
                      )
                  );
                }
                // if (nRowElementsIndex > nColumnLevelWhitePixelFinderIndex) {
                //   continue;
                // } else {
                //   break;
                // }
              }
            }
          }
        } else {
          nDistance = 0;
        }
        // Putting the result distance into output array.
        aComputedDistances[nInputRowIteratorIndex][nRowElementsIndex] =
          String(nDistance);
        // Resetting the distance to zero before proceeding to next pixel
        nDistance = 0;
      }
    }
    return aComputedDistances;
  }
}
