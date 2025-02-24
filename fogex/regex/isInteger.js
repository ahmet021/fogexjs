const patternInteger = new RegExp(/^[0-9]+$/);

export const isInteger = (value) => {
  if (value == null || patternInteger == '/(?:)/') return;
  return patternInteger.test(value);
};
