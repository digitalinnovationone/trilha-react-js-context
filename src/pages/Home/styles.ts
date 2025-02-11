import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  display: grid;
  gap: ${({ theme }) => theme.spacings.lg};
  grid-template-rows: 1fr 3fr 2fr 3fr;
  grid-template-columns: 3fr 2fr;
  grid-template-areas:
    "welcome search"
    "banner played"
    "library library"
    "discounts friends";
  align-items: end;
`;

export const WelcomeArea = styled.div`
  grid-area: welcome;
`;

export const SearchArea = styled.div`
  grid-area: search;
  display: inline-flex;
  gap: ${({ theme }) => theme.spacings.md};
  height: fit-content;
`;

export const BannerArea = styled.section`
  grid-area: banner;
`;

export const RecentlyPlayedArea = styled.section`
  grid-area: played;
`;

export const LibraryArea = styled.section`
  grid-area: library;
  grid-column: span 2;
`;

export const DiscountsArea = styled.section`
  grid-area: discounts;
`;

export const FriendsArea = styled.section`
  grid-area: friends;
`;
