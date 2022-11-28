import Button from "designsystem/lib/components/Button";
import Heading from "designsystem/lib/components/Heading";

import Greeting from "./components/Greeting";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Heading level="h1">Play Together</Heading>
      <Greeting />
    </div>
  );
}

export default App;
