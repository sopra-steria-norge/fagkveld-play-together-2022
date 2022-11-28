import { classes } from "../utils";

import styles from "./Card.module.css";

enum Elevation {
  none = "none",
  minimum = "minimum",
  medium = "medium",
  maximum = "maximum",
}

export interface CardProps {
  children: React.ReactNode;
  elevation: keyof typeof Elevation;
  fillWidth?: boolean;
  title?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  elevation = Elevation.minimum,
  fillWidth = false,
  title,
}) => {
  return (
    <div className={classes([styles.card, styles[elevation], fillWidth ? styles.fillWidth : ""])}>
      {title && <p className={styles.cardHeading}>{title}</p>}
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};
