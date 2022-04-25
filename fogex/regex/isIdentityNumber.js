let patternIdentityNumber = new RegExp(/^[1-9]{1}[0-9]{9}[02468]{1}$/);

export const isIdentityNumber = (value) => {
  return patternIdentityNumber.test(value);
};
