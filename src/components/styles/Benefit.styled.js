import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const BenefitWrapper = styled.div`
  background: rgba(167, 146, 254, 0.07);
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
  }

  h1 {
    color: #232c35;
    font-family: "CeraPro";
    font-weight: 700;
    font-size: 36px;
    position: absolute;
    top: 5px;
    right: 580px;
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      top: 6px;
      right: 450px;
      padding-bottom: 4rem;
    }
    @media (max-width: 1040px) {
      display: none;
    }
  }
`;
export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;
export const BenefitLeft = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    padding: 80px 60px;
    gap: 10rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  }
`;

export const BenefitRight = styled.div`
  flex: 1;
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 80px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    padding: 80px 60px;
    gap: 10rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
  }
`;

export const BenefitContent = styled.div`
  margin-bottom: 3rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const BenefitImage = styled.img`
  margin-bottom: 1.5rem;
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation: ${rotate} 2s linear infinite;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ChoiceTitle = styled.h3`
  font-family: "CeraPro";
  font-weight: 700;
  font-size: 20px;
  color: #232c35;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 26px;
  }
`;
export const ChoiceDesc = styled.p`
  margin-top: 1rem;
  font-family: "CeraPro";
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: #4f4f4f;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 22px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 18px;
  }
`;
