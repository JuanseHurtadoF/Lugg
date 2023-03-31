import { FunctionComponent } from "react";
import { StarProps } from "@types";
import styles from "@styles/components/stars.module.scss";

const Stars: FunctionComponent<StarProps> = ({
  fill = "#FFCB45",
  width = 32,
  height = 32,
  gap = 1,
}) => {
  return (
    <div className={styles.starsContainer}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: `${gap}rem` }}
      >
        <path
          d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z"
          fill={fill}
        />
      </svg>
      <svg
        width={width}
        height={height}
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: `${gap}rem` }}
      >
        <path
          d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z"
          fill={fill}
        />
      </svg>
      <svg
        width={width}
        height={height}
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: `${gap}rem` }}
      >
        <path
          d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z"
          fill={fill}
        />
      </svg>
      <svg
        width={width}
        height={height}
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: `${gap}rem` }}
      >
        <path
          d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z"
          fill={fill}
        />
      </svg>
      <svg
        width={width}
        height={height}
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Stars;
