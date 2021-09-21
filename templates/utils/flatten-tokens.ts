/**
 * Flatten the tokens JSON into simple key value pairs
 * @param {object} obj - the object to flatten.
 * @param {array} prefix - recursively passed to function.
 * @param {array} current - recursively passed to function.
 */
export const flattenTokens = (obj, prefix = [], current = {}) => {
  if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      const p = key !== 'value' ? key : false;
      flattenTokens(obj[key], prefix.concat(p), current);
    }
  } else {
    current[prefix.filter(Boolean).join('-')] = obj;
  }
  return current;
};
