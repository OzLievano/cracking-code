import {URLify} from './URLify';

 
test('URLify', () => {
  const stringToTest = "This is a Test     "
  expect(URLify(stringToTest)).toBe("This%20is%20a%20Test");
} )


test('URLify', () => {
  const stringToTest= 'My Barn';
  expect(URLify(stringToTest)).toBe('My%20Barn');
} )
