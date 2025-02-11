import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xl};
`;

export const Recomendations = styled.div`
  margin-top: ${({ theme }) => theme.spacings.lg};
  max-width: 850px;
`;
