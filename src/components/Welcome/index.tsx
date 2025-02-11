import { FC } from "react";
import { Title } from "./styles";

type Props = {
  name: string;
};

const WelcomeTitle: FC<Props> = ({ name }) => {
  return (
    <Title>
      Good evening, <span>{name}</span>
    </Title>
  );
};

export default WelcomeTitle;
