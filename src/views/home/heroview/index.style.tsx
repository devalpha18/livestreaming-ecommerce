import styled from "styled-components";

import Hero from "../../../assets/home/hero.jpg";

export const HeroViewWrapper = styled.div`
  height: 100vh;
  background: Url(${Hero});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    margin-top: 130px;
    margin-bottom: 150px;
  }
`;

export const HeorViewContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.75rem;
  padding-left: 0.75rem;

  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

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

export const HeroViewMobileButtonContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 150px;
  display: flex;
`;

export const HeroViewTitle = styled.div`
  color: #e8b89b;
  font-weight: 600;
  font-size: 2.5rem;

  margin-bottom: 0.5rem;

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const HeroViewContent = styled.div`
  margin-top: 30px;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  font-size: 1.25rem;
  font-weight: 300;
  color: #ffffff;

  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const HeroViewButton = styled.div`
  background-color: #c5b097;
  color: #ffffff;
  border-radius: 50px;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;

  padding: 0.5rem 3rem 0.5rem 3rem;
  display: inline-block;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeroViewMobileButton = styled.div`
  background-color: #c5b097;
  color: #ffffff;
  border-radius: 50px;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;

  padding: 1rem 1.5rem 1rem 1.5rem;
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
  }

  @media (min-width: 450px) {
    padding: 1rem 5rem 1rem 5rem;
  }

  @media (min-width: 576px) {
    padding: 1rem 4rem 1rem 4rem;
  }
`;

export const HeroContentPart = styled.div`
  text-align: right;
`;
