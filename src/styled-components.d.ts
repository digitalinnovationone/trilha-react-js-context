import { Theme } from "./types/interfaces/theme";
import "styled-components";

declare module "styled-components" {
  export type DefaultTheme = Theme;
}
