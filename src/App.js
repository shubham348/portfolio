import React, { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GlobalStyles } from "./global";
import Main from "./pages/Main";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = createTheme({
    palette: {
      mode,
    },
    name: "light",
    body: "#FFFFFF",
    text: "#343434",
    dark: "#000000",
    secondaryText: "#7F8DAA",
    accentColor: "#443CD2",
    accentBright: "#FC1056",
    projectCard: "#DCE4F2",
    skinColor: "#F7B799",
    skinColor2: "#FCB696",
    imageDark: "#dce4f2",
    imageClothes: "#dce4f2",
    avatarMisc: "#e9ecf2",
    avatarShoes: "#ccd2e3",
  });

  const darkTheme = createTheme({
    palette: {
      mode,
    },
    name: "dark",
    body: "#1D1D1D",
    text: "#FFFFFF",
    dark: "#000000",
    secondaryText: "#8D8D8D",
    accentColor: "#443CD2",
    accentBright: "#FC1056",
    projectCard: "#292A2D",
    skinColor: "#F7B799",
    skinColor2: "#FCB696",
    imageDark: "#292A2D",
    imageClothes: "#000000",
    avatarMisc: "#212121",
    avatarShoes: "#2B2B2B",
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === "light" ? theme : darkTheme}>
        <GlobalStyles theme={mode === "light" ? theme : darkTheme} />
        <Main />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
