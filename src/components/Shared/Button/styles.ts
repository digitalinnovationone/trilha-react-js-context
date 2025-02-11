import styled from "styled-components";

export const StyledButton = styled.button<{
  readonly $variant: "primary" | "link" | "icon";
  readonly $hasIcon: boolean;
}>`
  border: none;
  padding: ${({ $hasIcon, theme }) =>
    $hasIcon ? `${theme.spacings.sm} ${theme.spacings.md}` : theme.spacings.md};
  line-height: 0;
  cursor: pointer;
  background-color: transparent;
  background-color: ${({ $variant: variant, theme }) =>
    variant === "primary"
      ? theme.colors.secondary.default
      : theme.colors.primary.dark};
  border-radius: ${({ $variant: variant, theme }) =>
    variant === "primary" ? theme.radius.lg : theme.radius.sm};
  color: ${({ $variant: variant, theme }) =>
    variant === "primary"
      ? theme.colors.primary.dark
      : theme.colors.primary.variant};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings.sm};
`;
