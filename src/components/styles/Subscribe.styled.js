import styled from "styled-components";

export const SubscribeWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.subscribeBg};
  height: 389px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    flex-direction: column;
  }
`;
export const SubscribeInfo = styled.div`
  text-align: center;
  margin: 0 auto;
`;
export const SubscribeTitle = styled.h3`
  font-family: "CeraPro";
  font-weight: 700;
  font-size: 36px;
  color: #232c35;
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 18px;
  }
`;
export const SubscribeDesc = styled.p`
  font-family: "CeraPro";
  font-weight: 400;
  font-size: 20px;
  color: #233533;
  /* padding: 0px 300px; */
  /* margin-bottom: 1rem; */
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0px 250px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0px 90px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0px 40px;
    font-size: 16px;
  }
`;
export const SubscribeForm = styled.form`
  margin-top: 1rem;
  input {
    border: none;
    outline: none;
    width: 342px;
    height: 48px;
    border: 2px solid #ffffff;
    padding: 0.9rem;
    font-size: 16px;
    line-height: 12px;
    background-color: ${({ theme }) => theme.colors.subscribeBg};
    color: ${({ theme }) => theme.colors.body};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${({ theme }) => theme.colors.body};
      font-size: 0.97rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 300px;
      margin: 0.9rem 2rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      width: 200px;
      margin: 1rem 3rem;
    }
  }
  button {
    margin-left: 0.7rem;
    border: none;
    width: 157px;
    height: 48px;
    background: ${({ theme }) => theme.colors.subscribeBtn};
    color: ${({ theme }) => theme.colors.body};
    font-size: 16px;
    line-height: 12px;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      text-align: center;
      width: 300px;
      margin: 1rem 2rem;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
      width: 200px;
      margin: 1rem 3rem;
    }
  }
`;
