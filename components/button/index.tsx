import React, { FunctionComponent } from "react";
import styles from "@styles/components/button.module.scss";
import { ButtonProps } from "@types";
import Link from "next/link";

const Button: FunctionComponent<ButtonProps> = ({ text, linkTo }) => {
  return (
    <Link href={linkTo}>
      <div className={styles.container}>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Button;
