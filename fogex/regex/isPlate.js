<<<<<<< HEAD
const plates = {
=======
const patternPlates = {
>>>>>>> fogexjs-master
  TR: /^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\d{4,5})|([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3}))$/,
  US: /^B[A-Z]{2}-[0-9]{3}$/,
};

const isPlate = (value, countyCode) => {
<<<<<<< HEAD
  let patternPlate = new RegExp(plates[countyCode]);
  if (value == null || patternPlate == "/(?:)/") {
=======
  let patternPlate = new RegExp(patternPlates[countyCode]);
  if (value == null || patternPlate == '/(?:)/') {
>>>>>>> fogexjs-master
    return false;
  } else {
    return patternPlate.test(value);
  }
};

module.exports = isPlate;
