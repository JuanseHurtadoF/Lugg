import { FunctionComponent } from "react";
import styles from "@styles/components/review.module.scss";
import fonts from "@styles/base/fonts.module.scss";
import { Stars } from "..";
import Image from "next/image";
import { ReviewProps } from "@types";

const Review: FunctionComponent<ReviewProps> = ({
  image,
  name,
  activity,
  text,
}) => {
  return (
    <div className={styles.review}>
      <div className={styles.user}>
        <Image
          width={48}
          height={48}
          className={styles.img}
          alt={`${name}'s profile picture`}
          src={image}
        ></Image>
        <div className={styles.userDetails}>
          <p className={fonts.name}>{name}</p>
          <p className={fonts.details}>{activity}</p>
        </div>
      </div>
      <Stars width={16} height={16} gap={0.2} />
      <p className={fonts.text}>{text}</p>
    </div>
  );
};

export default Review;
