export interface DefaultTheme {
  fonts: {
    family: {
      heading: string;
      body: string;
    };
    sizes: {
      heading: string;
      body: string;
      small: string;
      caption: string;
      button: string;
    };
  };
  spacings: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
  };
  radius: {
    xl: string;
    lg: string;
    md: string;
    sm: string;
  };
}

export interface Theme extends DefaultTheme {
  colors: {
    primary: {
      default: string;
      variant: string;
      medium: string;
      dark: string;
    };
    secondary: {
      default: string;
    };
    status: {
      positive: string;
      negative: string;
    };
    contrast: string;
  };
}
