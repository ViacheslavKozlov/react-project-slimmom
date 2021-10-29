import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AuthLogForm.module.css";
import { mainRoutes } from "../../routes/mainRoutes";

const AuthForm = ({ handleSubmit, btnName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const { type, value } = e.target;
    type === "text" && setName(value);
    type === "email" && setEmail(value);
    type === "password" && setPassword(value);
  };
  const onSubmit = (e) => {
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
  btnName: PropTypes.string,
};

export default AuthForm;
