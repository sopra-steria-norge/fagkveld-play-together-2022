import type { NextPage } from "next";

import styles from "@/styles/Home.module.css";
import Greeting from "./components/Greeting";

const Home: NextPage = () => {
  return (
    <div className={styles.centeredContainer}>
      <Greeting />
    </div>
  );
};

export default Home;
