import styled from "styled-components";

export const ItemContainer = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid
      ${({ theme }) => `${theme.colors.primary.variant}4D`};
    padding-bottom: ${({ theme }) => theme.spacings.md};
    margin-bottom: ${({ theme }) => theme.spacings.md};
  }
`;
