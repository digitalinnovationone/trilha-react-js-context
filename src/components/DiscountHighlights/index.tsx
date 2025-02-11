import { useTheme } from "styled-components";
import Card from "../Shared/Card";
import BagIcon from "../Shared/Icons/Bag";
import Image from "../Shared/Image";
import {
  CartButton,
  Discount,
  List,
  Price,
  PriceContainer,
  SmallText,
  Title,
} from "./styles";
import { Game } from "../../types/interfaces/game";
import useCart from "../../hooks/useCart";

const games: Game[] = [
  {
    id: 928,
    src: "https://cdn2.unrealengine.com/egs-easportsfc25ultimateedition-eacanada-editions-g1a-04-1920x1080-bbdf88397366.jpg",
    devices: ["ps4", "ps5"],
    name: "Edição Standard do EA SPORTS FC™ 24",
    prices: {
      discountPercentage: 60,
      value: 94.99,
      valueWithDiscount: 37.99,
    },
  },
  {
    id: 129,
    src: "https://cdn2.unrealengine.com/egs-marvelsspiderman2-insomniacgamesnixxessoftware-g1a-00-1920x1080-490389992071.jpg",
    devices: ["ps4", "ps5"],
    name: "Marvel's Spider-Man 2: Complete Edition",
    prices: {
      discountPercentage: 50,
      value: 120,
      valueWithDiscount: 60,
    },
  },
  {
    id: 482,
    src: "https://cdn2.unrealengine.com/egs-mortalkombat1khaosreignskollection-netherrealmstudiosqloc-editions-g1a-00-1920x1080-0e390078d489.jpg",
    devices: ["ps4", "ps5", "pc"],
    name: "Mortal Kombat™ 1: Koleção Reina o Kaos",
    prices: {
      discountPercentage: 90,
      value: 340,
      valueWithDiscount: 34,
    },
  },
];

const DiscountHighlights = () => {
  const theme = useTheme();
  const cart = useCart();

  const itemExistsInCart = (id: number) => {
    return cart?.items.find((game) => game.id === id);
  };

  const toggleCart = (game: Game) => {
    if (itemExistsInCart(game.id)) {
      cart?.removeFromCart(game.id);
      alert(`${game.name} removed from cart successfully!`);

      return;
    }

    cart?.addToCart(game);
    alert(`${game.name} added to cart successfully!`);
  };

  return (
    <>
      <h2>Discount Highlights</h2>
      <List>
        {games.map((game) => (
          <Card key={game.id}>
            <Image src={game.src} alt={game.name} width={"100%"} height={210} />
            <SmallText>{game.devices.join(" • ")}</SmallText>
            <Title>{game.name}</Title>
            <PriceContainer>
              <Discount>- {game.prices.discountPercentage}%</Discount>
              <Price $strikethrough>${game.prices.value.toFixed(2)}</Price>
              <Price>${game.prices.valueWithDiscount.toFixed(2)}</Price>
            </PriceContainer>
            <CartButton
              icon={<BagIcon fill={theme.colors.primary.dark} />}
              onClick={() => toggleCart(game)}
            >
              {!itemExistsInCart(game.id) ? "Add to cart" : "Remove from cart"}
            </CartButton>
          </Card>
        ))}
      </List>
    </>
  );
};

export default DiscountHighlights;

