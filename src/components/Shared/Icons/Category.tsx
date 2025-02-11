import { FC } from "react";

const CategoryIcon: FC<React.SVGProps<SVGElement>> = ({ fill = "#fff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    fill="none"
    viewBox="0 0 21 21"
  >
    <path
      fill={fill}
      d="M14.456.005h3.442a2.59 2.59 0 0 1 2.581 2.603V6.08a2.59 2.59 0 0 1-2.58 2.602h-3.443a2.59 2.59 0 0 1-2.58-2.602V2.608a2.59 2.59 0 0 1 2.58-2.603"
      opacity="0.4"
    ></path>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M2.727.005h3.442A2.59 2.59 0 0 1 8.75 2.608V6.08a2.59 2.59 0 0 1-2.58 2.602H2.726A2.59 2.59 0 0 1 .147 6.08V2.608A2.59 2.59 0 0 1 2.726.005m0 11.657h3.442a2.59 2.59 0 0 1 2.581 2.603v3.471c0 1.437-1.155 2.603-2.58 2.603H2.726c-1.426 0-2.581-1.166-2.581-2.603v-3.471a2.59 2.59 0 0 1 2.58-2.603m15.171 0h-3.442a2.59 2.59 0 0 0-2.58 2.603v3.471c0 1.437 1.154 2.603 2.58 2.603h3.442c1.426 0 2.581-1.166 2.581-2.603v-3.471a2.59 2.59 0 0 0-2.58-2.603"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default CategoryIcon;
