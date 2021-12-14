import styled from "styled-components";

export const EditUserAccountFormPart = styled.div`
  margin-top: 50px;
`;

export const EditUserAccountLabel = styled.div`
  font-size: 20px;
  color: #555555;
  font-weight: 600;

  margin-bottom: 10px;
`;

export const EditUserAccountTextField = styled.input`
  margin-bottom: 20px;

  border: none;
  height: 40px;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;

  padding-left: 15px;
`;

export const SubPart = styled.div``;

export const SubItemPart = styled.div`
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EditUserAccountSelect = styled.select`
  margin-bottom: 20px;

  background: #ffffff;
  border: none;
  height: 40px;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;

  padding-left: 15px;
`;

export const SubmitButtonPart = styled.div`
  width: 100%;

  margin-top: 30px;
`;

export const SendButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 50%;
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
    width: 80%;
  }
`;

export const SubItemPartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FileUpload = styled.div``;

export const RadioButtonsContainer = styled.div``;

export const AccountRadioButton = styled.input``;
