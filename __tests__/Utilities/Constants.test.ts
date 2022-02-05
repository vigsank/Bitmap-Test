/* eslint-disable max-len */
import {Constants} from '../../src/Utilities/Constants';

describe('Constants Tests', () => {
  it('Test All Constants', () => {
    expect(Constants.MIN_NUMBER_OF_TEST_CASE).toEqual(1);
    expect(Constants.MAX_NUMBER_OF_TEST_CASE).toEqual(1000);

    expect(Constants.MIN_ALLOWED_BITMAP_SIZE).toEqual(1);
    expect(Constants.MAX_ALLOWED_BITMAP_SIZE).toEqual(182);

    expect(Constants.BLACK_PIXEL_VALUE).toEqual(0);
    expect(Constants.WHITE_PIXEL_VALUE).toEqual(1);
  });
});
