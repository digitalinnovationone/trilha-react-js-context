import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => theme.spacings.md};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.colors.contrast};
`;
