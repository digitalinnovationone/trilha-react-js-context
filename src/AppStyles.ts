import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.xl};
  height: ${({ theme }) => `calc(100vh - ${theme.spacings.xl} * 2)`};
  overflow: hidden;
`;

export const PageContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;
