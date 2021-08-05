import React from "react";
import classNames from "classnames";
import styles from "./text.module.scss";

export function Text({ text, className }) {
  return <p className={classNames(styles.text, text, className)}>{text}</p>;
}
