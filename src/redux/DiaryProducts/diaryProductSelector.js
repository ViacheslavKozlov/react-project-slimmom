// import { createSelector } from "reselect";

const getEatenProducts = (state, date) =>
  state.products?.items?.filter((item) => item.date === date);

const dairyProductsSelector = (state) => state.products?.response;

export { dairyProductsSelector, getEatenProducts };
// export const getContactItems = (state) => state.contacts.items;

// export const contactErrorSelector = (state) => state.contacts.items;

// export const contactsFilteredContacts = createSelector(
//   [getContactItems, getFilteredContact],
//   (items, filter) => {
//     return items.filter((item) =>
//       item.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

// const diaryProductId = state => state.days.day.id;
// const diaryEatenProductId = state => state.days.day.eatenProducts.id;
// const getEatenProducts = state => state.days.day.eatenProducts;
// export { getEatenProducts, diaryProductId, diaryEatenProductId };
