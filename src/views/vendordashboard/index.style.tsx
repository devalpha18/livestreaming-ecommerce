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
    font-size: 15px;

    background-color: #eeeeee;
    color: #555555;

    width: 31%;
    padding: 3px 0 3px 1%;

    border-radius: 10px;
  }
  
  @media screen and (max-width: 992px){
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
  
  @media (max-width: 992px) {
    width: calc(100% - 60px);
    margin-bottom: 30px;
  }
`;

export const PedidoTitle = styled.div`
  margin-bottom: 30px;

  color: #e8b89b;
  font-size: 30px;
  font-weight: 600;
  
  @media (max-width: 992px) {
    font-size: 20px;
  }
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
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  width: 35%;
  
  @media (max-width: 992px) {
    width: calc(100% - 30px);
  }
`;

export const VendorButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 200px;
  border-radius: 30px;
  text-align: center;
  margin: auto;
  height: 40px;

  line-height: 40px;
  font-size: 20px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 992px) {
    font-size: 18px;
    width: 40%;
    height: 40px;
    line-height: 40px;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
    width: 60%;
    height: 30px;
    line-height: 30px;
  }
  
  @media (max-width: 526px) {
    font-size: 15px;
    width: 80%;
    height: 30px;
    line-height: 30px;
  }
  @media (max-width: 414px) {
    font-size: 15px;
    width: 90%;
    height: 30px;
    line-height: 30px;
  }
`;

export const LiveButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const PedidoButtonContainer = styled.div`
  width: 100%;
`;
