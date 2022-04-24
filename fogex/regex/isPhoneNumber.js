const patternPhones = {
  TR: /^(\+?90|0)?5\d{9}$/,
  US: /^(\+?1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/,
};

const isPhoneNumber = (value, countyCode) => {
  let patternPhoneNumber = new RegExp(patternPhones[countyCode]);
  if (value == null || patternPhoneNumber == '/(?:)/') {
    return false;
  } else {
    return patternPhoneNumber.test(value);
  }
};

module.exports = isPhoneNumber;
