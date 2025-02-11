import { defaultTheme } from "./default";
import { Theme } from "../types/interfaces/theme";

export const purpleTheme: Theme = {
  colors: {
    primary: {
      default: "#4C4C9B",
      variant: "#9393D7",
      medium: "#353470",
      dark: "#28264D",
    },
    secondary: {
      default: "#F98E62",
    },
    status: {
      positive: "#A8F63C",
      negative: "#F63C3C",
    },
    contrast: "#FFFFFF",
  },
  ...defaultTheme,
};
