export const getInitialAllergens = (data) => (
  Object.keys(data)
    .map((key) => data[key].items)
    .reduce((acc, val) => acc.concat(val), [])
  // Get the arrays of allergens for each item
    .map((item) => item.product.allergens)
  // Flatten into one Array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    .reduce((acc, val) => acc.concat(val), [])
  // Remove Duplicates (See link above)
    .reduce((acc, val) => (acc.includes(val) ? acc : [...acc, val]), [])
);
