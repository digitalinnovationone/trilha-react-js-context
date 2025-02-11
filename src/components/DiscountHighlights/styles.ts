import styled from "styled-components";
import Button from "../Shared/Button";

export const List = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.md};
`;

export const SmallText = styled.small`
  text-transform: uppercase;
  color: ${({ theme }) => `${theme.colors.contrast}80`};
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.body};
`;

export const PriceContainer = styled.div`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacings.sm};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
`;

export const Discount = styled.span`
  background-color: ${({ theme }) => theme.colors.primary.variant};
  color: ${({ theme }) => theme.colors.primary.dark};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => `0 ${theme.spacings.sm}`};
  font-weight: 600;
`;

export const Price = styled.span<{ $strikethrough?: boolean }>`
  text-decoration: ${({ $strikethrough }) =>
    $strikethrough ? "line-through" : "unset"};
`;

export const CartButton = styled(Button)<{ $removeAction?: boolean }>`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings.md};
`;
