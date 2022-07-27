import styled from "styled-components";

export const NavbarWrapper = styled.div`
  /* background-color: ${({ theme }) => theme.colors.header}; */
  padding: 40px 0;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 0.7rem;
    font-size: 25px;
    font-weight: bolder;
  }
`;
export const Logo = styled.img``;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavListItem = styled.li`
  margin-right: 1rem;
  font-size: 17px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;
export const Image = styled.img`
  flex: 1;
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 40px 0 30px;
  }
`;
export const IntroLeft = styled.div`
  flex: 1;
  h1 {
    font-weight: 700;
    font-size: 53px;
    color: #232c35;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 30px;
    }
  }
  p {
    font-weight: 500;
    font-size: 23px;
    color: #4f4f4f;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 20px;
    }
  }
`;
