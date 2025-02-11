import { ImgHTMLAttributes } from "react";
import { StyledImage } from "./styles";

const Image: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({ ...props }) => {
  return <StyledImage {...props} />;
};

export default Image;
