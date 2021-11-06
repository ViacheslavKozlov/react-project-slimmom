import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AuthLogForm.module.css";
import { mainRoutes } from "../../routes/mainRoutes";
import { Button } from "../button/Button";
import { useHistory } from "react-router-dom";
import Wrapper from "../wrapper/Wrapper";

const AuthForm = ({ handleSubmit, btnName, btn_auth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("dnbdimka34@gmail.com");
  const [password, setPassword] = useState("qweqwe123");

  const onChange = (e) => {
    const { type, value } = e.target;
    type === "text" && setName(value);
    type === "email" && setEmail(value);
    type === "password" && setPassword(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(handleSubmit({ username: name, email, password }))
    // console.log(handleSubmit())
    // if ()
    // let path = `/calculator`;
    // history.push(path);
    handleSubmit({ username: name, email, password });
  };
  const history = useHistory();

  return (
    <div className={styles.auth_wrapper}>
      <h1 className={styles.registration_title}>{btnName}</h1>
      <form onSubmit={onSubmit} className={styles.registration_form}>
        <div>
          {btnName === mainRoutes[4].name && (
            <label className={styles.registration_label}>
              Имя *{" "}
              <input
                type="text"
                autoComplete="off"
                placeholder=""
                onChange={onChange}
                value={name}
                required
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                className={styles.registration_input}
              />
              <hr className={styles.registration_line} />
            </label>
          )}

          <label className={styles.registration_label}>
            Логин *{" "}
            <input
              type="email"
              autoComplete="off"
              placeholder=""
              onChange={onChange}
              value={email}
              required
              className={styles.registration_input}
            />
            <hr className={styles.registration_line} />
          </label>

          <label className={styles.registration_label}>
            Пароль *{" "}
            <input
              type="password"
              autoComplete="off"
              placeholder=""
              onChange={onChange}
              value={password}
              required
              pattern="^[A-Za-z]+\d+.*$"
              title="Пароль должен включать только цифры и буквы"
              className={styles.registration_input}
            />
            <hr className={styles.registration_line} />
          </label>
        </div>
        <div className={styles.flex}>
          <Button type={"submit"} buttonName={btnName} />

          {btnName === mainRoutes[3].name && (
            <Button
              btn_auth={styles.btn_white}
              onClick={() => {
                let path = `/register`;
                history.push(path);
              }}
              type={`button`}
              buttonName={`Регистрация`}
            />
          )}
        </div>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  handleSubmit: PropTypes.func,
  btnName: PropTypes.string,
};

export default AuthForm;
