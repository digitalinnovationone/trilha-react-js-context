import { FC, PropsWithChildren } from "react";
import { Container } from "./styles";

type Props = {
  className?: string;
};

const Card: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Card;
