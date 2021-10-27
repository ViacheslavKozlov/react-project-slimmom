import { createSelector } from "reselect";

export const getFilteredContact = (state) => state.contacts.filter;

export const getContactItems = (state) => state.contacts.items;

export const contactErrorSelector = (state) => state.contacts.items;

export const contactsFilteredContacts = createSelector(
  [getContactItems, getFilteredContact],
  (items, filter) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
