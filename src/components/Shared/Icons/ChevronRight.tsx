import { FC } from "react";

const ChevronLeftIcon: FC<React.SVGProps<SVGElement>> = ({
  stroke = "#fff",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="16"
    fill="none"
    viewBox="0 0 15 16"
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.433 3.8 3.385 4.017-3.385 4.017"
    ></path>
  </svg>
);

export default ChevronLeftIcon;
