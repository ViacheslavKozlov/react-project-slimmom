const diaryProductId = state => state.days.day.id;
const diaryEatenProductId = state => state.days.day.eatenProducts.id;
const getEatenProducts = state => state.days.day.eatenProducts;
export { getEatenProducts, diaryProductId, diaryEatenProductId };
