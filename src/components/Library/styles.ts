import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.md};
  max-width: 100%;
  overflow-x: auto;

  & img:hover {
    border: 3px solid ${({ theme }) => theme.colors.primary.variant};
    animation: ${rotate} 0.8s linear 1;
  }
`;
