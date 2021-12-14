import styled from "styled-components";

export const JoinViewWrapper = styled.div`
  background-color: #c5b097;

  padding-bottom: 3rem;
`;

export const JoinViewContainer = styled.div`
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

export const JoinViewTitlePart = styled.div`
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  font-size: calc(1.375rem + 1.5vw);
  padding-top: 3rem;
  margin-bottom: 1.5rem;

  position: relative;

  img {
    width: 90px;
    position: absolute;
    vertical-align: middle;
    top: 1.5rem;
  }
`;

export const JoinViewButtonPart = styled.div`
  width: 100%;

  margin-top: 3rem;

  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SubButtonPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 41.6666666667%;
`;

export const IconPart = styled.div`
  padding: 27px;
  border: none;
  border-radius: 50%;
  background-color: #ffffff;
  display: inline-block;
`;

export const IconImg = styled.img`
  width: 100px;
  height: 100px;
  margin-top: -5px;
  margin-bottom: 5px;
  vertical-align: middle;
`;

export const TextPart = styled.div`
  font-size: calc(1.275rem + 0.3vw);
  color: #ffffff;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonPart = styled.div`
  border: 2px solid;
  background-color: #e8b89b;
  border-radius: 50px;
  color: #ffffff;
  text-transform: uppercase;
  font-size: calc(1.275rem + 0.3vw);
  display: inline-block;
  padding: 0.5rem 3rem 0.5rem 3rem;

  border-color: #e8b89b;
`;

export const DividerPart = styled.div`
  display: block;
  text-align: center;
  width: 16.6666666667%;
`;

export const Divider = styled.div`
  width: 14px;
  height: 100%;
  border-radius: 50px;
  background-color: #e8b89b;
  display: inline-block;
`;
