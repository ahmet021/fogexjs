let patternCamelCase = new RegExp(/^[a-z][a-zA-Z0-9]*$/);

export const isCamelCase = (value) => {
  return patternCamelCase.test(value);
};
