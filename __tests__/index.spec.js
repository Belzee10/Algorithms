import {
  defangingIpAddress,
  numJewelsInStones,
  rangeSumBST
} from '../index.js';

test('should return a defanged IP address', () => {
  expect(defangingIpAddress('1.1.1.1')).toBe('1[.]1[.]1[.]1');
});

test('should return the count of appareances of arg1 in arg2', () => {
  expect(numJewelsInStones('aA', 'aAAbbbb')).toBe(3);
});

test('should sum all values between arg2 and arg3 (inclusive)', () => {
  expect(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15)).toBe(32);
});
