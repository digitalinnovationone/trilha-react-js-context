import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.md};
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: ${({ theme }) => theme.spacings.md};
  border-radius: ${({ theme }) => theme.radius.xl};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary.variant};
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.family.body};
  font-size: ${({ theme }) => theme.fonts.sizes.body};
  color: ${({ theme }) => theme.colors.contrast};
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;
