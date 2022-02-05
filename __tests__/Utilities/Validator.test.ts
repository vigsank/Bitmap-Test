/* eslint-disable max-len */
import {Validator} from '../../src/Utilities/Validator';

describe('Validator Tests', () => {
  describe('Test No Of Test cases range', () => {
    it('isNoOfTestCasesWithinRange returns true for valid test case range', () => {
      expect(Validator.isNoOfTestCasesWithinRange(55)).toBeTruthy();
    });

    describe('Negative Cases', () => {
      it('isNoOfTestCasesWithinRange returns false for test case < min range', () => {
        expect(Validator.isNoOfTestCasesWithinRange(0)).toBeFalsy();
      });

      it('isNoOfTestCasesWithinRange returns false for test case > min range', () => {
        expect(Validator.isNoOfTestCasesWithinRange(1001)).toBeFalsy();
      });
    });
  });

  describe('Test Bit Map size range', () => {
    it('isBitmapSizeWithinRange returns true for valid size range - (r=1, c=182)', () => {
      expect(
          Validator.isBitmapSizeWithinRange({
            rowSize: 1,
            columnSize: 182
          })
      ).toBeTruthy();
    });

    it('isBitmapSizeWithinRange returns true for valid size range - (r=182, c=1)', () => {
      expect(
          Validator.isBitmapSizeWithinRange({
            rowSize: 182,
            columnSize: 1
          })
      ).toBeTruthy();
    });

    it('isBitmapSizeWithinRange returns true for valid size range - (r=182, c=182)', () => {
      expect(
          Validator.isBitmapSizeWithinRange({
            rowSize: 182,
            columnSize: 182
          })
      ).toBeTruthy();
    });

    describe('Negative Cases', () => {
      it('isBitmapSizeWithinRange returns false for invalid size range - (r=0, c=182)', () => {
        expect(
            Validator.isBitmapSizeWithinRange({
              rowSize: 0,
              columnSize: 182
            })
        ).toBeFalsy();
      });

      it('isBitmapSizeWithinRange returns false for valid size range - (r=182, c=0)', () => {
        expect(
            Validator.isBitmapSizeWithinRange({
              rowSize: 182,
              columnSize: 0
            })
        ).toBeFalsy();
      });

      it('isBitmapSizeWithinRange returns false for valid size range - (r=0, c=0)', () => {
        expect(
            Validator.isBitmapSizeWithinRange({
              rowSize: 0,
              columnSize: 0
            })
        ).toBeFalsy();
      });

      it('isBitmapSizeWithinRange returns false for valid size range - (r=183, c=1)', () => {
        expect(
            Validator.isBitmapSizeWithinRange({
              rowSize: 183,
              columnSize: 0
            })
        ).toBeFalsy();
      });

      it('isBitmapSizeWithinRange returns false for valid size range - (r=1, c=183)', () => {
        expect(
            Validator.isBitmapSizeWithinRange({
              rowSize: 1,
              columnSize: 183
            })
        ).toBeFalsy();
      });
    });
  });
});
