import styled from "styled-components";

export const UserDashboardWrapper = styled.div`
  background-color: #c5b0971a;

  margin-top: 130px;

  .HeaderPart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .HeaderPart > div {
    text-align: left;
    font-size: 20px;

    background-color: #eeeeee;
    color: #555555;

    width: 32%;
    padding: 3px 0 3px 1%;

    border-radius: 10px;
  }

  .eachButtonPart {
    width: 48%;

    @media (max-width: 768px) {
      width: 100%;

      margin-bottom: 30px;
    }
  }
`;

export const UserDashboardContainer = styled.div`
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

export const Title = styled.div`
  padding-top: 80px;
  margin-bottom: 50px;

  color: #e8b89b;
  font-size: 30px;
  font-weight: 600;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;

  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TablePart = styled.div`
  padding-bottom: 80px;
`;

export const TableTitle = styled.div`
  font-size: 20px;
  color: #555555;
  font-weight: 600;

  margin-bottom: 20px;
`;

export const UserTable = styled.div``;

export const Button = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 100%;
  border-radius: 30px;
  text-align: center;

  height: 70px;

  font-size: 20px;

  line-height: 70px;
  font-size: 28px;
  font-weight: 600;

  cursor: pointer;
`;
