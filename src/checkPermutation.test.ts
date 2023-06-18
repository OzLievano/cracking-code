import {checkPermutations} from './checkPermutation';


test('isUnique', () => {
  const stringToTest1 = 'abracadabra';
  const stringToTest2 = 'abracadabras';
  expect(checkPermutations(stringToTest1,stringToTest2)).toBe(false);
} )


test('isUnique', () => {
  const stringToTest1 = 'Barn';
  const stringToTest2 = 'narb';
  expect(checkPermutations(stringToTest1, stringToTest2)).toBe(true);
} )
