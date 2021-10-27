import React from "react";
import DiaryProductsListItem from "./diaryProductsListItem/DiaryProductsListItem";
import { useSelector } from "react-redux";
import { contactsFilteredContacts } from "../../redux/Contacts/contactsSelectors";

const DiaryProductsList = () => {
  const contacts = useSelector(contactsFilteredContacts);
  return (
    <>
      <ul className="list">
        {eatenProducts &&
          eatenProducts.map((eatenProduct) => (
            <DiaryProductsListItem
              key={eatenProduct.id}
              eatenProduct={eatenProduct}
            />
          ))}
      </ul>
    </>
  );
};

export default DiaryProductsList;
