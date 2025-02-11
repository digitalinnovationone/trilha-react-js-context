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

const CartSummary = () => {
  const theme = useTheme();

  const calcTotalCartValue = () => {
    return 0;
  };

  const calcTotalDiscount = () => {
    return 0;
  };

  return (
    <Container>
      <h2>Cart Summary</h2>
      <Text>Check your cart summary and complete your purchase.</Text>
      <Summary>
        <Label>
          Price: <Value>$ {calcTotalCartValue().toFixed(2)}</Value>
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

