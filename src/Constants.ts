/**
 * Defines all Constants that helps in validation of Inputs and computation of Distance.
 */
export abstract class Constants {
  static readonly MIN_NUMBER_OF_TEST_CASE: number = 1;
  static readonly MAX_NUMBER_OF_TESTCASES: number = 1000;

  static readonly MIN_ALLOWED_BITMAP_SIZE: number = 1;
  static readonly MAX_ALLOWED_BITMAP_SIZE: number = 182;

  static readonly BLACK_PIXEL_VALUE: number = 0;
  static readonly WHITE_PIXEL_VALUE: number = 1;
}
