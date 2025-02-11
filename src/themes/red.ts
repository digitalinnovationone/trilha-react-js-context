import { defaultTheme } from "./default";
import { Theme } from "../types/interfaces/theme";

export const redTheme: Theme = {
  colors: {
    primary: {
      default: "#B83B3A",
      variant: "#D07170",
      medium: "#61272D",
      dark: "#361617",
    },
    secondary: {
      default: "#FDFEC2",
    },
    status: {
      positive: "#A8F63C",
      negative: "#F63C3C",
    },
    contrast: "#FFFFFF",
  },
  ...defaultTheme,
};
