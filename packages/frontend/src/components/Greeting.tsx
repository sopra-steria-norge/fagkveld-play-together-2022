import { useState, ChangeEvent } from "react";

import { Card, Textfield } from "designsystem/lib/components";

import styles from "./Greeting.module.css";

const Greeting: React.FC = () => {
  const [name, setName] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  /** Returnerer dagens motto hvis ikke navn er angitt. */
  function getCardText() {
    return name ? `Hei, ${name}! 👋` : "Frontend! + Design = ♥️";
  }

  return (
    <Card elevation="minimum" fillWidth>
      <p className={styles.hello}>{getCardText()}</p>
      <Textfield label="Hva heter du?" onChange={handleChange} value={name} />
    </Card>
  );
};

export default Greeting;
