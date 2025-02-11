import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.family.body};
    background-color: ${({ theme }) => theme.colors.primary.medium};
    margin: 0;
  }

  #root {
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacings.xl};
  }

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.fonts.family.heading};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.contrast};
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacings.md};
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes.heading};
  }

  a {
    color: ${({ theme }) => theme.colors.primary.variant};
  }

  ::-webkit-scrollbar {
    background-color: transparent;
  }
`;
