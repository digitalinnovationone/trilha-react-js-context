import { FC } from "react";

const ActivityIcon: FC<React.SVGProps<SVGElement>> = ({ fill = "#fff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    fill="none"
    viewBox="0 0 25 25"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M15.61 4.952a4.09 4.09 0 0 0 4.094 4.089 4 4 0 0 0 .742-.072v8.106c0 3.41-2.012 5.427-5.427 5.427H7.581c-3.423 0-5.435-2.017-5.435-5.427V9.648c0-3.41 2.012-5.446 5.435-5.446h8.1a4 4 0 0 0-.072.75M13.481 15.28l2.905-3.749v-.018a.767.767 0 0 0-.143-1.062.743.743 0 0 0-1.055.152l-2.45 3.15-2.788-2.195a.75.75 0 0 0-1.064.143l-3.004 3.874a.73.73 0 0 0-.161.464.75.75 0 0 0 1.386.438l2.512-3.25 2.789 2.187a.75.75 0 0 0 1.073-.134"
      clipRule="evenodd"
    ></path>
    <circle cx="19.938" cy="4.711" r="2.542" fill={fill} opacity="0.4"></circle>
  </svg>
);

export default ActivityIcon;
