const isUpperCase = require('../fogex/regex/isUpperCase');

it('should return true for valid upperCase values', () => {
  expect(isUpperCase('ABC')).toBe(true);
});
