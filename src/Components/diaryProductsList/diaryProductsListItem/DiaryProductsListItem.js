import React from "react";

// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../../redux/DiaryProducts/diaryProductOperations";

const DiaryProductsListItem = ({ eatenProduct }) => {
  // const deleteContactItem = () => dispatch(deleteContact(eatenProduct.id));

  return (
    <>
      <li className="data">
        <p>{eatenProduct.title}</p>
        <p>{eatenProduct.weight}</p>
        <p>{eatenProduct.kcal}</p>
        <button
          className="btn"
          type="button"
          id={eatenProduct._id}
          // onClick={deleteContactItem}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;
