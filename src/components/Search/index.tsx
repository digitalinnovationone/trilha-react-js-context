import { FC } from "react";
import SearchIcon from "../Shared/Icons/Search";
import Input from "../Shared/Input";
import { useTheme } from "styled-components";

interface Props {
  onSearch: (term: string) => void;
}

export const Search: FC<Props> = ({ onSearch }) => {
  const theme = useTheme();

  return (
    <Input
      placeholder="Search anything you want..."
      icon={<SearchIcon stroke={theme.colors.contrast} />}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default Search;
