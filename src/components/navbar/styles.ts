import { NavLink } from "react-router";
import styled from "styled-components";

export const Logo = styled.img`
  width: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: ${({ theme }) => `calc(${theme.spacings.xl} - 0.625rem)`};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.lg};
  margin: 0;
  padding: 0;
`;

export const MenuLink = styled(NavLink)`
  box-sizing: content-box;
  width: 1.5rem;
  height: 1.5rem;
  padding: ${({ theme }) => theme.spacings.sm};

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: ${({ theme }) => theme.radius.sm};
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.md};
`;
