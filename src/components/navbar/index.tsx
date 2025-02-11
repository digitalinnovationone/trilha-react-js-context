import { cloneElement } from "react";
import { useTheme } from "styled-components";
import { Avatar, Logo, MenuLink, MenuList, Nav } from "./styles";
import LogoLightImage from "../../assets/images/logo/epic-games-logo-light.png";
import LoggedUserImage from "../../assets/images/mock/logged-user.png";
import ActivityIcon from "../Shared/Icons/Activity";
import CategoryIcon from "../Shared/Icons/Category";
import ChatIcon from "../Shared/Icons/Chat";
import FolderIcon from "../Shared/Icons/Folder";
import GameIcon from "../Shared/Icons/Game";
import UserIcon from "../Shared/Icons/User";

const menus = [
  { id: "home", icon: <CategoryIcon />, path: "/" },
  { id: "games", icon: <GameIcon />, path: "/games" },
  { id: "chat", icon: <ChatIcon />, path: "/chat" },
  { id: "friends", icon: <UserIcon />, path: "/friends" },
  { id: "downloads", icon: <FolderIcon />, path: "/downloads" },
  { id: "activity", icon: <ActivityIcon />, path: "/activity" },
];

const Navbar = () => {
  const theme = useTheme();

  return (
    <Nav>
      <MenuList>
        <Logo src={LogoLightImage} alt="Epic Games" />
        {menus.map(({ id, icon, path }) => (
          <MenuLink key={id} to={path}>
            {({ isActive }) =>
              cloneElement(icon, {
                fill: isActive
                  ? theme.colors.secondary.default
                  : theme.colors.contrast,
              })
            }
          </MenuLink>
        ))}
      </MenuList>
      <Avatar src={LoggedUserImage} alt="Chidi Eze" />
    </Nav>
  );
};

export default Navbar;
