import type { PropsWithChildren } from "react";

import styles from "./Heading.module.css";

export interface HeadingProps extends PropsWithChildren {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({ children, level = "h1" }) => {
  const LeveledHeading = `${level}` as keyof JSX.IntrinsicElements;
  return (
    <LeveledHeading className={styles[`heading-${level}`]}>
      {children}
    </LeveledHeading>
  );
};

export default Heading;
