import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #c5b0971a;

  margin-top: 130px;
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  padding-top: 70px;
  padding-bottom: 100px;

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

export const Title = styled.div`
  color: #e8b89b;
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 992px) {
    text-align: left;
  }
`;

export const CustomButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 100%;
  border-radius: 30px;
  text-align: center;
  margin: auto;

  height: 70px;

  font-size: 20px;

  line-height: 70px;
  font-size: 28px;
  font-weight: 600;

  cursor: pointer;

  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    width: 90%;
  }
`;
