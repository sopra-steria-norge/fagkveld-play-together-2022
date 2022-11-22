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
}

const Card: React.FC<CardProps> = ({
  children,
  elevation = Elevation.minimum,
}) => {
  return (
    <div className={classes([styles.card, styles[elevation]])}>{children}</div>
  );
};

export default Card;
