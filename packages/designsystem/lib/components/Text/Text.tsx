import type { PropsWithChildren } from "react";

import styles from "./Text.module.css";

export interface TextProps extends PropsWithChildren {
  as: "p";
  size: "sm" | "md" | "lg" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl";
}

export const Text: React.FC<TextProps> = ({
  children,
  as = "p",
  size = "md",
}) => {
  const LeveledText = `${as}` as keyof JSX.IntrinsicElements;
  return (
    <LeveledText
      className={`${styles.text} ${styles[`text-size-${size}`]}`}
      as={as}
    >
      {children}
    </LeveledText>
  );
};
