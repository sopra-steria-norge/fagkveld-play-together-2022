import type { PropsWithChildren } from "react";

import styles from "./Heading.module.css";

export interface HeadingProps extends PropsWithChildren {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant: "default" | "red";
  size: "sm" | "md" | "lg" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl";
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  as = "h1",
  variant = "default",
  size = "md",
}) => {
  const LeveledHeading = `${as}` as keyof JSX.IntrinsicElements;
  return (
    <LeveledHeading
      className={`${styles.heading} ${styles[`heading-${variant}`]} ${
        styles[`heading-size-${size}`]
      }`}
      as={as}
    >
      {children}
    </LeveledHeading>
  );
};
