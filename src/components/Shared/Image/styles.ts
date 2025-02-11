import styled from "styled-components";

export const StyledImage = styled.img.attrs((props) => ({
  width: props.width || 56,
  height: props.height || 56,
}))`
  border-radius: ${({ theme }) => theme.spacings.sm};
  object-fit: cover;
`;
