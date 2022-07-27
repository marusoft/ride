import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.productBg};
  color: #fff;
`;

export const ProductInfo = styled.div`
  text-align: center;
  padding: 40px 10px;
`;
export const ProductTitle = styled.h1`
  font-size: 36px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 26px;
  }
`;
export const ProductDesc = styled.p`
  font-size: 20px;
  padding: 0px 90px;
  color: #e0e0e0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 10px 20px;
  }
`;

export const ProductImageGuide = styled.div`
  flex: 1;
`;
export const ProductTextGuide = styled.div`
  flex: 1;
`;
export const GuideWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;
export const GuideStep = styled.span`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  padding: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.2rem;
  color: #000;
  font-size: .95rem;
`;
export const GuideTextWrapper = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  font-family: "CeraPro";
  h4 {
    margin-bottom: 1rem;
    font-size: 24px;
    color: #ffffff;
  }
  p {
    font-size: 17px;
    color: #ffffff;
  }
`;
