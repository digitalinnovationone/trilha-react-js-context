import { ReactNode } from "react";
import { Caption, Container, Wrapper, Title } from "./styles";
import Image from "../Image";

type Props = {
  imageSrc: string;
  text: string;
  caption: string;
  action?: ReactNode;
};

const Item: React.FC<Props> = ({ imageSrc, text, caption, action }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={imageSrc} alt={text} />
        <div>
          <Title>{text}</Title>
          <Caption>{caption}</Caption>
        </div>
      </Wrapper>
      {action}
    </Container>
  );
};

export default Item;
