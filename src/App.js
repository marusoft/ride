import React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalStyles from "./components/styles/Global.styled";
import Homepage from "./pages/Homepage";

const theme = {
  colors: {
    header: "#efefef",
    body: "#ffffff",
    footer: "#DEB63D",
  },
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960",
    lg: "1280px",
    xl: "1920px",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
        <Navbar />
        <Homepage />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
