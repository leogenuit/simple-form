import React from "react";
import styles from "../input/Input.module.scss";
const Input = ({ type, placeholder, label, id }) => {
  return (
    <>
      <div className={styles.inputComponent}>
        <label htmlFor={label}>{label}</label>
        <input type={type} placeholder={placeholder} id={id} />
      </div>
    </>
  );
};

export default Input;
