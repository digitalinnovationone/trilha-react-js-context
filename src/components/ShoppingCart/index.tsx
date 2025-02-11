import Card from "../../components/Shared/Card";
import Item from "../../components/Shared/Item";
import { Container, List, Text, RemoveButton } from "./styles";
import { Game } from "../../types/interfaces/game";
import { Link } from "react-router";

const ShoppingCart = () => {
  // TODO
  const cart = { items: [] };

  const onRemoveCartItem = (game: Game) => {};

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {!cart?.items?.length ? (
        <>
          <Text>
            You don't have items in your cart yet. See our discounts highlights
            or <Link to="/">Go to home page</Link>.
          </Text>
        </>
      ) : (
        <>
          <Text>You have {cart?.items.length} item(s) in your cart.</Text>
          <List>
            {cart?.items.map((game) => (
              <Card key={game.id}>
                <Item
                  imageSrc={game.src}
                  text={game.name}
                  caption={`$ ${game.prices.valueWithDiscount.toFixed(2)}`}
                  action={
                    <RemoveButton onClick={() => onRemoveCartItem(game)}>
                      Remove
                    </RemoveButton>
                  }
                />
              </Card>
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default ShoppingCart;

