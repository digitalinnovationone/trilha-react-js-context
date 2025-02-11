import CartSummary from "../../components/CartSummary";
import DiscountHighlights from "../../components/DiscountHighlights";
import ShoppingCart from "../../components/ShoppingCart";
import WelcomeTitle from "../../components/Welcome";
import { Container, Recomendations } from "./styles";

const CartPage = () => {
  return (
    <>
      <WelcomeTitle name="Chidi Eze" />
      <Container>
        <ShoppingCart />
        <CartSummary />
      </Container>
      <Recomendations>
        <DiscountHighlights />
      </Recomendations>
    </>
  );
};

export default CartPage;
