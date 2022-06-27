import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    primary: {
        main: "#27aae1",
        darker: "#0e8abe",
        light: "#58c8f6",
        subtle: "#e2f7ff",
    },
    error: {
        main: "#ff3b3b",
        darker: "#e53535",
        light: "#ff5c5c",
        subtle: "#ffd3d3",
    },
    warning: {
        main: "#ffcc00",
        darker: "#e5b800",
        light: "#fddd48",
        subtle: "#fded72",
    },
    info: {
        main: "#1f58ea",
        darker: "#1143c3",
        light: "#5786ff",
        subtle: "#a7c0ff",
    },
    success: {
        main: "#0dda84",
        darker: "#16b44b",
        light: "#48f883",
        subtle: "#d8ffe5",
    },
    dark: {
        d1: "#3a3a3c",
        d2: "#525151",
        d3: "#777b7d",
        d4: "#c4c9cc",
    },
    light: {
        l1: "#e7ebee",
        l2: "#ecf1f5",
        l3: "#f4f6f8",
        l4: "#fdfdfd",
    },
    fontFamily: "Roboto, sans-serif",
    breakpoint: {
        xl: 1440,
        lg: 1280,
        md: 1024,
        sm: 768,
        xs: 480,
    },
    bodyPadding: {
        xl: 165,
        lg: 32,
        md: 30,
        sm: 25,
        xs: 25,
    },
    authPadding: {
        xl: 100,
        lg: 32,
        md: 30,
        sm: 25,
        xs: 25,
    },
};

export default theme;