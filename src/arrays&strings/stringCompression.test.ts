import {stringCompression} from './stringCompression';


test('stringCompression', () => {
  const stringToTest1 = 'aabcccccaaa';
  expect(stringCompression(stringToTest1)).toBe('a2b1c5a3');
} )
