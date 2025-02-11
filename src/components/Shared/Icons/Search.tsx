import { FC } from "react";

const SearchIcon: FC<React.SVGProps<SVGElement>> = ({ stroke = "#fff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    fill="none"
    viewBox="0 0 16 17"
  >
    <circle
      cx="7.844"
      cy="8.344"
      r="5.992"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.6"
      strokeWidth="1.2"
    ></circle>
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.6"
      strokeWidth="1.2"
      d="m12.012 12.823 2.35 2.344"
    ></path>
  </svg>
);

export default SearchIcon;
