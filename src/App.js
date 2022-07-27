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
    productBg: "#5C1A8D",
    subscribeBtn: "#2C3539",
    subscribeBg: "#F2C94C",
    footer: "#DEB63D",
  },
  breakpoints: {
    xs: "400px",
    sm: "600px",
    // md: "960",
    md: "768px",
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
