const patternHex = new RegExp(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i);

export const isHex = (value) => {
  if (value == null || patternHex == '/(?:)/') return;
  return patternHex.test(value);
};
