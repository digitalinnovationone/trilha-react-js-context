import { useTheme } from "styled-components";
import ArmyImage from "../../assets/images/banner/army.png";
import ArrowIcon from "../Shared/Icons/Arrow";
import Image from "../Shared/Image";
import {
  BannerContainer,
  Content,
  Title,
  Text,
  PurchaseButton,
} from "./styles";

const Banner = () => {
  const theme = useTheme();

  return (
    <BannerContainer>
      <Content>
        <Title>Watch Streaming Games Anywhere & Anytime!</Title>
        <Text>
          Watch streaming of your favorite games and collect the best heroes,
          anytime and anywhere.
        </Text>
        <PurchaseButton icon={<ArrowIcon stroke={theme.colors.primary.dark} />}>
          Purchase Now
        </PurchaseButton>
      </Content>
      <Image
        className="image"
        src={ArmyImage}
        alt="Army"
        width={"50%"}
        height={"100%"}
      />
    </BannerContainer>
  );
};

export default Banner;
