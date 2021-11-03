const getEatenProducts = (state, date) =>
  state.products?.items?.filter((item) => item.date === date);

const dairyProductsSelector = (state) => state.products?.response;
const dairyProductsLoading = (state) => state.products.isLoading;

export { dairyProductsSelector, getEatenProducts, dairyProductsLoading };
