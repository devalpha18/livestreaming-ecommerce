import styled from "styled-components";

export const NotFoundPageWrapper = styled.div`
  background-color: #c5b0971a;
  min-height: 100vh;
`;

export const NotFountPageContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.75rem;
  padding-left: 0.75rem;

  text-align: center;

  max-width: 90%;
  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const NotFountPageTitle = styled.div`
  padding-top: 80px;
  margin-bottom: 50px;

  color: #e8b89b;
  font-size: 60px;
  font-weight: 600;
`;

export const BackHomeButtonPart = styled.div`
  width: 100%;

  margin-bottom: 120px;
  margin-top: 70px;
`;

export const BackHomeButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 200px;
  border-radius: 30px;
  text-align: center;
  margin: auto;

  height: 70px;

  font-size: 20px;

  line-height: 70px;
  font-size: 28px;
  font-weight: 600;

  cursor: pointer;
`;
