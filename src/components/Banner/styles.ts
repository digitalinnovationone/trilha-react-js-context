import styled from "styled-components";
import Button from "../Shared/Button";

export const BannerContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  & .image {
    position: absolute;
    object-fit: contain;
    object-position: bottom;
    right: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.md};
  background-color: ${({ theme }) => theme.colors.primary.default};
  border-radius: ${({ theme }) => theme.radius.md};
  margin-top: ${({ theme }) => theme.spacings.xl};
  padding: ${({ theme }) => theme.spacings.xl};
  width: 80%;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.heading};
  max-width: 70%;
  margin: 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.contrast};
  max-width: 50%;
  margin: 0;
`;

export const PurchaseButton = styled(Button)`
  width: fit-content;
`;
