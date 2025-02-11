import styled from "styled-components";
import Card from "../Shared/Card";
import Button from "../Shared/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.body};
  color: ${({ theme }) => `${theme.colors.contrast}80`};
  margin: 0;
`;

export const Summary = styled(Card)`
  margin: ${({ theme }) => `${theme.spacings.md} 0`};
`;

export const Label = styled.p`
  color: ${({ theme }) => `${theme.colors.primary.variant}`};
  font-size: ${({ theme }) => theme.fonts.sizes.body};
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin: 0;

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacings.lg};
  }

  &:last-child {
    border-top: 1px solid ${({ theme }) => `${theme.colors.contrast}80`};
    padding-top: ${({ theme }) => theme.spacings.lg};
  }
`;

export const Value = styled.span`
  font-weight: 400;
  color: ${({ theme }) => `${theme.colors.contrast}`};
`;

export const CheckoutButton = styled(Button)`
  padding: ${({ theme }) => theme.spacings.md};
  width: 100%;
`;
