import styled from "styled-components";

export const HowtoViewWrapper = styled.div`
  background-color: #e8b89b;

  padding-bottom: 100px;
`;

export const HowtoViewContainer = styled.div`
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

export const HowtoViewTitle = styled.div`
  padding-bottom: 1rem;
  display: inline-block;
  color: #ffffff;
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

export const HowtoViewBottomPart = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const HowtoViewBottomLeftPart = styled.div`
  width: 83.3333333333%;
  margin-top: 3rem;

  @media (max-width: 992px) {
    width: 100%;
    margin-top: 0;

    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const ContentPart = styled.div`
  background: linear-gradient(90deg, #c5b097 0%, #e8b89b 100%);
  border-radius: 30px;
  color: #6d6154;

  margin-bottom: 1rem;
  padding: 3rem 3rem;

  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: calc(100% - 95px);
    background-color: #e8b89b;
    border-radius: 30px;
  }

  @media (max-width: 992px) {
    background: transparent;
    padding-top: 0;
    padding-bottom: 0;

    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 130%;
      background-color: #c5b097;
      border-radius: 30px;
      transform: translateY(-22%);
    }
  }
`;

export const ContentItem = styled.div`
  align-items: center;
  padding-left: 50px;
  margin-bottom: 25px;
  display: flex;

  font-size: 1.25rem;

  @media (max-width: 992px) {
    font-size: 1.5rem;
  }

  &.LastItem {
    margin-bottom: 0;
  }

  span {
    background-color: #ffffff;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    font-weight: bold;
    margin-right: 15px;
  }
`;

export const HowtoViewBottomRightPart = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
  img {
    max-width: initial;
    width: 440px;
    margin-left: -265px;
    margin-top: -40px;
    position: absolute;
    image-rendering: -webkit-optimize-contrast;

    @media (max-width: 992px) {
      margin-left: auto;
      position: relative;
      margin-top: 30px;
    }
  }
`;

export const ContentText = styled.div`
  width: calc(100% - 60px);
`;
