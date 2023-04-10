import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: "#0065FF",
        secondary: "#36B37E",
        background: "#131417",
        contentBackground: "#1f2024",
        blueBackground: "#EAF9FF",
        greyBackground: "#2a2b30",
        text: "#FFFFFF",
        textSecondary: "#f7f7f7",
        textDisabled: "#A3A3A3",
        borders: "#2a2b30",
        divider: "#2a2b30",
        white: "#FFFFFF",
      }
    : {
        primary: "#0065FF",
        secondary: "#36B37E",
        background: "#F9F9F9",
        contentBackground: "#FFFFFF",
        blueBackground: "#EAF9FF",
        greyBackground: "#EFEFEF",
        text: "#1D2C4B",
        textSecondary: "#666666",
        textDisabled: "#A3A3A3",
        borders: "#D1D1D1",
        divider: "#EFEFEF",
        white: "#FFFFFF",
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary,
            },
            secondary: {
              main: colors.secondary,
            },
            background: {
              default: colors.background,
            },
          }
        : {
            primary: {
              main: colors.primary,
            },
            secondary: {
              main: colors.secondary,
            },
            background: {
              default: colors.background,
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 16,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
