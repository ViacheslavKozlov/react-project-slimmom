import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AuthLogForm.module.css";
import { mainRoutes } from "../../routes/mainRoutes";

const AuthForm = ({ handleSubmit, btnName }) => {
  const [name, setName] = useState("Slava");
  const [email, setEmail] = useState("slava1@mail.com");
  const [password, setPassword] = useState("xxxxxxxx");

  const onChange = e => {
    const { type, value } = e.target;
    type === "text" && setName(value);
    type === "email" && setEmail(value);
    type === "password" && setPassword(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit({ username: name, email, password });
  };
  return (
    <form onSubmit={onSubmit}>
      {btnName === mainRoutes[4].name && (
        <label>
          name:{" "}
          <input
            type="text"
            autoComplete="off"
            placeholder="type here..."
            onChange={onChange}
            value={name}
            required
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            className={styles.input}
          />
        </label>
      )}
      <label>
        email:{" "}
        <input
          type="email"
          autoComplete="off"
          placeholder="type here..."
          onChange={onChange}
          value={email}
          required
          className={styles.input}
        />
      </label>
      <label>
        password:{" "}
        <input
          type="password"
          autoComplete="off"
          placeholder="type here..."
          onChange={onChange}
          value={password}
          required
          // pattern="^[A-Za-z]+\d+.*$"
          // title="Пароль должен включать только цифры и буквы"
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.btn}>
        {btnName}
      </button>
    </form>
  );
};

AuthForm.propTypes = {
  handleSubmit: PropTypes.func,
  btnName: PropTypes.string
};

export default AuthForm;
