import React from "react";
import styles from "./Textfield.module.css";

export interface TextfieldProps {
  description?: string;
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textfield: React.FC<TextfieldProps> = ({
  description,
  label,
  value,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <label id="textfield--label" htmlFor="textfield--input">
        {label}
      </label>
      <span className={styles.inputWrapper}>
        <input
          aria-labelledby="textfield--label textfield--description"
          id="textfield--input"
          className={styles.textfield}
          onChange={onChange}
          value={value}
        />
        <span id="textfield--description">{description}</span>
      </span>

      <small></small>
    </div>
  );
};

export default Textfield;
