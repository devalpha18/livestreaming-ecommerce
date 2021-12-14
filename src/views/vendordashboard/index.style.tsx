import styled from "styled-components";

export const VendorDashboardWrapper = styled.div`
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

    width: 31%;
    padding: 3px 0 3px 1%;

    border-radius: 10px;
  }
`;

export const VendorEachPage = styled.div`
  width: 25%;
  background-color: #ffffff;

  padding: 2rem 4%;

  @media (max-width: 992px) {
    width: 70%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    padding: 2rem 15%;

    display: flex;
    flex-direction: row;
  }

  @media (max-width: 526px) {
    width: 90%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    padding: 2rem 5%;

    display: flex;
    flex-direction: row;
  }

  .IconPart {
    @media (max-width: 992px) {
      width: 50%;
    }
    @media (max-width: 768px) {
      width: 126px;
      margin-right: 30px;
    }
  }
`;

export const VendorPageIcon = styled.img`
  width: 50%;

  @media (max-width: 768px) {
    width: 126px;
  }
`;

export const VendorEachPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;

  margin-bottom: 50px;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const VendorTableContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem 2rem;
  margin-bottom: 50px;

  @media (max-width: 992px) {
    background-color: transparent;
    padding: 0;
  }
`;

export const PedidoTitle = styled.div`
  margin-bottom: 30px;

  color: #e8b89b;
  font-size: 40px;
  font-weight: 600;
`;

export const PedidoInfoTable = styled.div`
  margin-bottom: 30px;

  @media (max-width: 992px) {
    background-color: #ffffff;
    padding: 1rem 1rem;
  }
`;

export const VendorLiveButtonContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem 1rem;

  @media (max-width: 992px) {
    background-color: transparent;
    padding: 0;
  }
`;

export const VendorButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 45%;
  border-radius: 30px;
  text-align: center;
  margin: auto;

  height: 70px;

  font-size: 20px;

  line-height: 70px;
  font-size: 28px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 992px) {
    width: 90%;

    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const LiveButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;

    background-color: #ffffff;
    padding: 1rem 1rem;
  }
`;

export const PedidoButtonContainer = styled.div`
  width: 100%;
`;
