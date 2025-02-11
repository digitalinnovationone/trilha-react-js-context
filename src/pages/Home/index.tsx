import { useTheme } from "styled-components";
import Search from "../../components/Search";
import Button from "../../components/Shared/Button";
import BagIcon from "../../components/Shared/Icons/Bag";
import SettingsIcon from "../../components/Shared/Icons/Settings";
import WelcomeTitle from "../../components/Welcome";
import RecentlyPlayed from "../../components/RecentlyPlayed";
import Friends from "../../components/Friends";
import {
  BannerArea,
  Container,
  DiscountsArea,
  FriendsArea,
  LibraryArea,
  RecentlyPlayedArea,
  SearchArea,
  WelcomeArea,
} from "./styles";
import Library from "../../components/Library";
import DiscountHighlights from "../../components/DiscountHighlights";
import Banner from "../../components/Banner";
import { useNavigate } from "react-router";

const HomePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <WelcomeArea>
        <WelcomeTitle name="Chidi Eze" />
      </WelcomeArea>
      <SearchArea>
        <Button
          variant="icon"
          icon={<SettingsIcon fill={theme.colors.contrast} />}
        />
        <Button
          variant="icon"
          icon={<BagIcon fill={theme.colors.contrast} />}
          onClick={() => navigate("cart")}
        />
        <Search
          onSearch={(term: string) => console.log("Term for search:", term)}
        />
      </SearchArea>
      <BannerArea>
        <Banner />
      </BannerArea>
      <RecentlyPlayedArea>
        <RecentlyPlayed />
      </RecentlyPlayedArea>
      <LibraryArea>
        <Library />
      </LibraryArea>
      <DiscountsArea>
        <DiscountHighlights />
      </DiscountsArea>
      <FriendsArea>
        <Friends />
      </FriendsArea>
    </Container>
  );
};

export default HomePage;
