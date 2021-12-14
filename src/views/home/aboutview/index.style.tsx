import styled from "styled-components";

import Logo_Bg from "../../../assets/home/logo-bg.png";

export const AboutViewWarpper = styled.div`
  background-color: #ffffff;

  padding: 3rem 0;

  background-image: Url(${Logo_Bg});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const AboutViewContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.75rem;
  padding-left: 0.75rem;

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

export const AboutViewTitle = styled.div`
  padding-bottom: 1rem;
  display: inline-block;
  color: #e8b89b;
  text-align: center;
  font-size: calc(1.375rem + 1.5vw);
  position: relative;
  font-weight: 600;

  padding: 1.5rem 0;
  margin: 1.5rem 0;

  width: 100%;

  &::before {
    bottom: 0;
    margin-left: -60px;
    left: 50%;
    content: "";
    position: absolute;
    width: 120px;
    height: 14px;
    background-color: #c5b097;
    border-radius: 50px;
  }
`;

export const AboutViewBottomPart = styled.div`
  margin-top: 3rem;
  width: 100%;

  display: flex;
  flex-direction: row;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutViewContentPart = styled.div`
  width: 75%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const AboutViewContentSubPart = styled.div`
  padding-right: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 992px) {
    padding-right: 0;
  }
`;

export const AboutViewImgPart = styled.div`
  width: 25%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const AboutViewImgSubPart = styled.div`
  text-align: center;
`;
