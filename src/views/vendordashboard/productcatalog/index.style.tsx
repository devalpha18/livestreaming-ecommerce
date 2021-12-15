import styled from "styled-components";

export const ProductCatalogWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  padding: 25px 35px;
  width: 100%;
  
  @media (max-width: 992px) {
    width: calc(100% - 60px);
  }
  
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
  a{
  text-decoration: none;
  width: 30%;
  @media (max-width:992px){
  display: flex;
  width:70%;
  justify-content: center;
  }
  }
`;

type ButtonProps = { color: string; width: string };
export const CRUDButton = styled.div<ButtonProps>`
  text-transform: uppercase;
  color: #ffffff;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
  border-radius: 50px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 600;

  cursor: pointer;
  margin: 0.5rem 0;

  @media (max-width: 992px) {
    width: 80%;
  }
  
  @media (max-width: 600px) {
    font-size: 15px;
  }
  
  @media (max-width: 526px) {
    font-size: 15px;
    width: 100%;
  }
  
  @media (max-width: 424px) {
    font-size: 12px;
    width: 100%;
  }
`;

export const ProductCatalogTextField = styled.input`
  margin-bottom: 20px;
  margin-top: 30px;

  border: none;
  height: 40px;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;

  padding-left: 15px;

  background-color: #eeeeee;

  font-size: 20px;
`;

export const ProductCatalogTable = styled.div`
  margin-top: 30px;
  
  @media (max-width: 992px) {
    background-color: #ffffff;
    padding: 1rem 1rem;
  }
  
  .HeaderSubpart {
    overflow: auto;
    contain: content;
    min-width: 480px;
  }
  overflow: auto;
`;
