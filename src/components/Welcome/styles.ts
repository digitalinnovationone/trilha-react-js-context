import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.variant};
  font-weight: 200;

  span {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.contrast};
    font-weight: 700;
  }
`;
