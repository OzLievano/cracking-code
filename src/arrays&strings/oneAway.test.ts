import {oneAway} from './oneAway';


test('oneAway to be false', () => {
  const stringToTest1 = 'pale';
  const stringToTest2 = 'bake';
  expect(oneAway(stringToTest1,stringToTest2)).toBe(false);
} )


test('oneAway to be true', () => {
  const stringToTest1 = 'pale';
  const stringToTest2 = 'pales';
  expect(oneAway(stringToTest1, stringToTest2)).toBe(true);
} )
