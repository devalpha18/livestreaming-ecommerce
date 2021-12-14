import styled from "styled-components";

export const ProductCatalogWrapper = styled.div`
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

    width: 23%;
    padding: 3px 0 3px 1%;

    border-radius: 10px;
  }
`;

export const CRUDButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }
`;

type ButtonProps = { color: string; width: string };
export const CRUDButton = styled.div<ButtonProps>`
  text-transform: uppercase;
  color: #ffffff;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  border-radius: 30px;
  text-align: center;
  height: 100px;

  font-size: 20px;

  line-height: 100px;
  font-size: 28px;
  font-weight: 600;

  cursor: pointer;
  margin: 0.5rem 0;

  @media (max-width: 992px) {
    width: 80%;
  }
`;

export const ProductCatalogTextField = styled.input`
  margin-bottom: 20px;
  margin-top: 30px;

  border: none;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;

  padding-left: 15px;

  background-color: #eeeeee;

  font-size: 36px;
`;

export const ProductCatalogTable = styled.div`
  margin-top: 30px;
`;
