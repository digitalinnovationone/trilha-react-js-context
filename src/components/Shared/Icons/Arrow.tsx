import { FC } from "react";

const ArrowIcon: FC<React.SVGProps<SVGElement>> = ({ stroke = "#fff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="19"
    fill="none"
    viewBox="0 0 15 14"
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
      d="m4.743 9.917 5.833-5.834M4.743 4.083h5.833v5.834"
    ></path>
  </svg>
);

export default ArrowIcon;
