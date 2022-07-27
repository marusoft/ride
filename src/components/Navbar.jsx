import React from "react";
import { Container } from "./styles/Container";
import { Flex } from "./styles/Flex.styled";
import {
  Image,
  Logo,
  LogoContainer,
  Nav,
  NavbarWrapper,
  NavList,
  NavListItem,
  IntroLeft
} from "./styles/Navbar.styled";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container>
        <Nav>
          <LogoContainer>
            <Logo src="/image/brand/logo.png" alt="brand" />
            <span>whichride</span>
          </LogoContainer>
          <NavList>
            <NavListItem>The App</NavListItem>
            <NavListItem>About Us</NavListItem>
            <NavListItem>Get in Touch</NavListItem>
          </NavList>
        </Nav>
        <Flex>
          <IntroLeft>
            <h1>Compare & book ride-hailing providers</h1>
            <p>
              Save money and time with WhichrRide. Think Compare the market but
              for taxis.
            </p>
          </IntroLeft>
          <Image src="/image/images/threephone.png" alt="description" />
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
