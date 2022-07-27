import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: .3rem;
    margin-bottom: 1rem;
  }
`;
export const AllRight = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
    margin-top: 0.7rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: .9rem;
  }
`;
export const TermandCondition = styled.p`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: .9rem;
  }
`;
