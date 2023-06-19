import {isPalindrome} from './isPalindrome';


test('isPalindrome', () => {
  const stringToTest = 'AppleBees';
  expect(isPalindrome(stringToTest)).toBe(false);
} )


test('isPalindrome', () => {
  const stringToTest = 'racecar';
  expect(isPalindrome(stringToTest)).toBe(true);
} )
