import React from "react";
import styles from "./Textfield.module.css";

interface TextfieldProps {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textfield: React.FC<TextfieldProps> = ({ label, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="textfield--input">{label}</label>
      <input
        id="textfield--input"
        className={styles.textfield}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Textfield;
