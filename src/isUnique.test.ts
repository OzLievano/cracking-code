import {isUnique} from './isUnique';


test('isUnique', () => {
  const stringToTest = 'abracadabra';
  expect(isUnique(stringToTest)).toBe(false);
} )


test('isUnique', () => {
  const stringToTest = 'Barn';
  expect(isUnique(stringToTest)).toBe(true);
} )
