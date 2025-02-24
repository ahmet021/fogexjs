const patternMac = new RegExp(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/);

export const isMac = (value) => {
  if (value == null || patternMac == '/(?:)/') return;
  return patternMac.test(value);
};
