import { DefaultTheme } from "../types/interfaces/theme";

export const defaultTheme: DefaultTheme = {
  fonts: {
    family: {
      heading: '"Poppins", serif',
      body: '"Inter", serif',
    },
    sizes: {
      heading: "1.5rem", // 24px
      body: "0.875rem", // 14px
      small: "0.75rem", // 12px
      caption: "0.75rem", // 12px
      button: "0.875rem", // 14px
    },
  },
  spacings: {
    xl: "2.5rem", // 40px
    lg: "1.5rem", // 24px
    md: "1rem", // 16px
    sm: "0.5rem", // 8px
  },
  radius: {
    xl: "2rem", // 32px
    lg: "1.5rem", // 24px
    md: "1rem", // 16px
    sm: "0.5rem", // 8px
  },
};
