import { defaultTheme } from "./default";
import { Theme } from "../types/interfaces/theme";

export const whiteTheme: Theme = {
  colors: {
    primary: {
      default: "#FFFFFF",
      variant: "#AAA7C5",
      medium: "#E4E4ED",
      dark: "#D4D5E0",
    },
    secondary: {
      default: "#2C8EFD",
    },
    status: {
      positive: "#A8F63C",
      negative: "#F63C3C",
    },
    contrast: "#575381",
  },
  ...defaultTheme,
};
