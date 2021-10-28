import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDailyRateOperation } from "../../redux/dailyRate/dailyRateOperations";
import { BASE_URL } from "../../service/Api";
import { Button } from "../button/Button";
import style from "./DiaryAddForm.module.css";

// const DiaryAddProductForm = () => {
//   const [taskName, setTaskName] = useState("");
//   const [details, setDetails] = useState("");
//   const [done, setDone] = useState(false);
//   const dispatch = useDispatch();

//   const onHandleChange = ({ target }) => {
//     const { value, name } = target;
//     name === "taskName" && setTaskName(value);
//     name === "done" && setDone((prev) => !prev);
//     name === "details" && setDetails(value);
//   };

//   const onHandleSubmit = (e) => {
//     e.preventDefault();
//     // ================
//     dispatch(addTasks({ taskName, done, details }));
//     setTaskName("");
//     setDetails("");
//     setDone(false);
//     return (
//             <form onSubmit={onHandleSubmit}>
//       <label>
//         TaskName:
//         <input
//           type='text'
//           name='taskName'
//           value={taskName}
//           onChange={onHandleChange}
//         />
//       </label>
//       <label>
//         Details:
//         <input
//           type='text'
//           name='details'
//           value={details}
//           onChange={onHandleChange}
//         />
//       </label>
//       <label>
//         Done:
//         <input
//           type='checkbox'
//           name='done'
//           checked={done}
//           onChange={onHandleChange}
//         />
//       </label>
//       <button type='submit'>Add task</button>
//     </form>
//     );
// }

const DiaryAddProductForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const onHandleChange = ({ target }) => {
    const { value } = target;
    console.dir(target.value);
    console.log(products);
    setValue(value);
  };

  const onChangeList = ({ target }) => console.log(target);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTc5NGE5N2E2Zjk3NjY4ZjdmYzU5MTQiLCJzaWQiOiI2MTdhNTQ2NWE2Zjk3NjY4ZjdmYzU5NDkiLCJpYXQiOjE2MzU0MDY5NDksImV4cCI6MTYzNTQxMDU0OX0.sdE4BnNBnwlQQ5MqTCNTQSLM_fA7KHN0FjHQdaoEzWI";

  useEffect(() => {
    // dispatch(getDailyRateOperation());
    // axios.post(
    //   `${BASE_URL}/daily-rate/61794a97a6f97668f7fc5914`,
    //   {
    //     weight: 100,
    //     height: 170,
    //     age: 30,
    //     desiredWeight: 60,
    //     bloodType: 1,
    //   },
    //   {
    //     headers: { Authorization: `Bearer ${token}` },
    //   }
    // );
    value.length > 3 &&
      axios
        .get(BASE_URL + `/product?search=${value}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setProducts(response.data));
  }, [value]);

  return (
    <>
      <div className={style.addProductInputForm}>
        <label htmlFor="myBrowser">
          <input
            className={style.formFieldProduct}
            onChange={onHandleChange}
            list="browsers"
            id="myBrowser"
            name="myBrowser"
            autoFocus
            placeholder="Введите название продукта"
          />
        </label>
        <datalist id="browsers">
          {products.map((product) => (
            <option
              key={product._id}
              id={product._id}
              value={product.title.ru}
            />
          ))}
        </datalist>
        <label htmlFor="myBrowser">
          <input
            className={style.formFieldWeigth}
            onChange={onHandleChange}
            list=""
            id=""
            name="number"
            autoFocus
            placeholder="Граммы"
          />
        </label>
      </div>
      <Button buttonName="Добавить" />
    </>
  );
};

export default DiaryAddProductForm;
