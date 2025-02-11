import styled from "styled-components";
import Button from "../Shared/Button";

export const Container = styled.div`
  flex: 1;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.md};
  padding: ${({ theme }) => `${theme.spacings.md} 0`};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.body};
  color: ${({ theme }) => `${theme.colors.contrast}80`};
  margin: 0;
`;

export const RemoveButton = styled(Button)`
  color: ${({ theme }) => theme.colors.primary.variant};
  text-decoration: underline;
  background-color: transparent;
`;
