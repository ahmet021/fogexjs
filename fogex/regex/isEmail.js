let patternEmail = new RegExp(/([a-zA-Z0-9])+\@([a-zA-Z0-9])+\.[a-zA-Z]{2,}/);

export const isEmail = (value) => {
  if (value == null || patternEmail == '/(?:)/') return;
  return patternEmail.test(value);
};
