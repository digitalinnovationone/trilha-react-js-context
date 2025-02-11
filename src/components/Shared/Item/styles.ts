import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.md};
  align-items: center;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.body};
  font-weight: 600;
  margin: 0;
`;

export const Caption = styled.small`
  font-size: ${({ theme }) => theme.fonts.sizes.caption};
  margin: 0;
  opacity: 0.5;
`;
