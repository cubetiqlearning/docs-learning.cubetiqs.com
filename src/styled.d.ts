import "styled-components";

export interface Shade {
  main: string;
  darker: string;
  light: string;
  subtle: string;
}

interface Screen {
  xl: number;
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

interface Dark {
  d1: string;
  d2: string;
  d3: string;
  d4: string;
}

interface Light {
  l1: string;
  l2: string;
  l3: string;
  l4: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    primary: Shade;
    error: Shade;
    warning: Shade;
    info: Shade;
    success: Shade;
    dark: Dark;
    light: Light;
    fontFamily: string;
    breakpoint: Screen;
    bodyPadding: Screen;
    authPadding: Screen;
  }
}
