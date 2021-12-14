import styled from "styled-components";

export const BlogViewWrapper = styled.div`
  background-color: #ffffff;

  padding: 3rem 0;
`;

export const BlogViewContainer = styled.div`
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

export const BlogViewTitle = styled.div`
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

export const BlogViewContentPart = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 3rem;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BlogViewItemPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 48%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const BlogViewItem = styled.img`
  width: 100%;
`;

export const BlogItemTitle = styled.div`
  display: inline-block;
  color: #e8b89b;
  text-align: center;
  font-size: calc(1.375rem + 1.5vw);
  position: relative;
  font-weight: 600;

  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  line-height: 3.5rem;
`;

export const BlogItemLink = styled.div`
  margin-bottom: 1.5rem;
`;

export const BlogLinkButton = styled.div`
  border: 2px solid transparent;
  background-color: #e8b89b;
  border-radius: 50px;
  color: #ffffff;
  text-transform: uppercase;

  padding: 0.5rem 3rem;

  margin-top: 1.5rem;
  display: inline-block;
  text-align: center;
  font-weight: 400;
  font-size: calc(1.275rem + 0.3vw);
`;

export const BlogButtonContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
`;
