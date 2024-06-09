import React from "react";
import styles from "../footer/Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Made with <span className={styles.span}>React </span>at
        <span className={styles.span}> Le Reacteur </span>by
        <span className={styles.span}> Léo</span>
      </p>
    </div>
  );
};

export default Footer;
