// import { createSelector } from "reselect";

export const getEatenProducts = (state, date) =>
  state.products.items.filter((item) => item.date === date);

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
