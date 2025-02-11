import { useTheme } from "styled-components";
import ArrowIcon from "../Shared/Icons/Arrow";
import {
  Container,
  Summary,
  Text,
  Label,
  Value,
  CheckoutButton,
} from "./styles";
import useCart from "../../hooks/useCart";

const CartSummary = () => {
  const theme = useTheme();
  const cart = useCart();

  if (!cart?.items.length) {
    return null;
  }

  const calcTotalValueWithoutDiscount = () => {
    return cart.items.reduce((total, item) => total + item.prices.value, 0);
  };

  const calcTotalDiscount = () => {
    return cart.items.reduce(
      (total, item) =>
        total + (item.prices.value - item.prices.valueWithDiscount),
      0
    );
  };

  const calcTotalCartValue = () => {
    return cart.items.reduce(
      (total, item) => total + item.prices.valueWithDiscount,
      0
    );
  };

  return (
    <Container>
      <h2>Cart Summary</h2>
      <Text>Check your cart summary and complete your purchase.</Text>
      <Summary>
        <Label>
          Price: <Value>$ {calcTotalValueWithoutDiscount().toFixed(2)}</Value>
        </Label>
        <Label>
          Discount: <Value>- $ {calcTotalDiscount().toFixed(2)}</Value>
        </Label>
        <Label>
          Taxes: <Value>Calculated at Checkout</Value>
        </Label>
        <Label>
          Subtotal: <Value>$ {calcTotalCartValue().toFixed(2)}</Value>
        </Label>
      </Summary>
      <CheckoutButton icon={<ArrowIcon stroke={theme.colors.primary.dark} />}>
        Complete Payment
      </CheckoutButton>
    </Container>
  );
};

export default CartSummary;

