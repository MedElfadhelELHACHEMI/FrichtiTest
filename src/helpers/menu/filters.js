/**
 * filterProductsByName helper
 *
 * USER STORY 1 - Search products by name
 * @todo: create helper to search through products
 */

export const filterProductsByName = (data, searchString) => {
  if (searchString !== '') {
    console.log(data);
    return (
      Object.keys(data)
        // Map to pull out the items out of each category
        .map((key) => data[key].items)
        // Reduce to group all the items in one array (this is basically Array.flat())
        .reduce((acc, val) => acc.concat(val), [])
        // filter to filter out the items that don't start with the seach query
        .filter((el) => el.product.title.toLowerCase().startsWith(searchString))
    );
  }
  return [];
};

/**
 * filterProductsWithoutAllergens helper
 *
 * USER STORY 3 - Filter products without some allergens
 * @todo: create helper to filter products without allergens
 */
export const filterProductsWithoutAllergens = (data, action) => Object.keys(data).map((key) => {
  data[key] = {
    ...data[key],
    items: data[key].items.filter(
      (item) => !item.product.allergens.includes(action.payload),
    ),
  };
});
