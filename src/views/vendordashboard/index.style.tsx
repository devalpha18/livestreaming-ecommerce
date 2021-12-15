import styled from "styled-components";

export const VendorDashboardWrapper = styled.div`
 display: flex;
 width:100%;
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
  
  @media screen and (max-width: 1000px){
    flex-direction: column;
  }
`;

export const VendorTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  margin-right: 30px;
  width:65%;
  
  @media (max-width: 1000px) {
    width: calc(100% - 60px);
    margin-bottom: 30px;
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

  @media (max-width: 1000px) {
    background-color: #ffffff;
    padding: 1rem 1rem;
  }
`;

export const VendorLiveButtonContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  width: 35%;
  
  @media (max-width: 1000px) {
    width: calc(100% - 30px);
  }
`;

export const VendorButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 250px;
  border-radius: 30px;
  text-align: center;
  margin: auto;
  height: 50px;

  line-height: 50px;
  font-size: 20px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const LiveButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
  }
`;

export const PedidoButtonContainer = styled.div`
  width: 100%;
`;
