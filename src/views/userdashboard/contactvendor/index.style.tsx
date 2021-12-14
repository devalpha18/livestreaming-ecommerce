import styled from "styled-components";

export const ContactVendorTitle = styled.div`
  padding-top: 80px;
  margin-bottom: 30px;

  color: #e8b89b;
  font-size: 30px;
  font-weight: 600;
`;

export const ContactVendorFormPart = styled.div`
  margin-bottom: 50px;
`;

export const ContactVendorLabel = styled.div`
  font-size: 20px;
  color: #555555;
  font-weight: 600;

  margin-bottom: 10px;
`;

export const ContactVendorTextField = styled.input`
  margin-bottom: 20px;

  border: none;
  height: 40px;
  width: 100%;
  border-radius: 10px;

  padding-left: 15px;
`;

export const ContactVendorTextArea = styled.textarea`
  border-radius: 10px;
  border: none;

  height: 300px;

  width: 100%;
  padding-left: 15px;
  padding-top: 15px;
`;

export const SubmitButtonPart = styled.div`
  margin: 50px 30px 80px 30px;

  @media (max-width: 500px) {
    margin: 50px 10px 80px 10px;
  }
`;

export const SendButton = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background-color: #e8b89b;
  width: 200px;
  border-radius: 30px;
  text-align: center;
  margin: auto;

  height: 70px;

  line-height: 70px;
  font-size: 28px;
  font-weight: 600;

  cursor: pointer;

  @media (max-width: 500px) {
    width: 150px;
    font-size: 22px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;
