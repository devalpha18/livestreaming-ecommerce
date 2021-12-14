import styled from "styled-components";

export const EditPedidoWrapper = styled.div`
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
`;

export const PedidoTitle = styled.div`
  padding-top: 80px;
  margin-bottom: 30px;

  color: #e8b89b;
  font-size: 30px;
  font-weight: 600;
`;

export const PedidoInfoTable = styled.div`
  margin-bottom: 30px;
`;

export const ItemsTitle = styled.div`
  margin-bottom: 30px;

  color: #e8b89b;
  font-size: 40px;
  font-weight: 600;
`;

export const ItemInfoTable = styled.div`
  margin-bottom: 30px;
`;

export const ContactInfo = styled.div`
  margin-bottom: 80px;
`;

export const SubPart = styled.div``;

export const SubItemPart = styled.div`
  width: 48%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactLabel = styled.div`
  font-size: 20px;
  color: #555555;
  font-weight: 600;

  margin-bottom: 10px;
`;

export const ContactTextField = styled.input`
  margin-bottom: 20px;

  background: #eeeeee;
  border: none;
  height: 40px;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;

  padding-left: 15px;
`;

export const ContactVendorButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 525px;
  border-radius: 30px;
  text-align: center;
  margin: auto;

  height: 70px;

  font-size: 24px;

  line-height: 70px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 90%;

    font-size: 3.125vw;
  }
`;

export const ContactButtonPart = styled.div`
  width: 100%;
  margin-bottom: 80px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;

export const SubItemPartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
