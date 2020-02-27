/* eslint-disable no-undef */
import { canvasGetCoordinate } from '../functions/canvas-helper';
import { isArraysEqual } from '../functions/services';

describe('Test canvasGetCoordinate()', () => {
  test('canvasGetCoordinate(512, 4, 10) should be 1280', () => {
    expect(canvasGetCoordinate(512, 4, 10)).toBe(1280);
  });
  test('canvasGetCoordinate(108, 4, 10) should be 270', () => {
    expect(canvasGetCoordinate(108, 4, 10)).toBe(270);
  });
});

describe('Test isArraysEqual()', () => {
  test('isArraysEqual([1, 2, 3], [1, 2, 3]) should be true', () => {
    expect(isArraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });

  test('isArraysEqual([1, 2, 3], [2, 2, 3]) should be false', () => {
    expect(isArraysEqual([1, 2, 3], [2, 2, 3])).toBe(false);
  });

  test('isArraysEqual([1, 2, 3], [1, 2, 5, 6]) should be false', () => {
    expect(isArraysEqual([1, 2, 3], [1, 2, 5])).toBe(false);
  });
});
