import styled from "styled-components";

export const ConfigurePaymentContent = styled.div`
  margin-top: 30px;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  font-size: 1.5rem;
  font-weight: 300;
  color: #555555;
`;

export const ButtonContainer = styled.div``;

export const SaveButton = styled.div`
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

export const PaymentOptionContainer = styled.div`
  padding: 2rem 0;
`;

export const PaymentOption = styled.div`
  margin: 1rem 0;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
  &:checked + ${RadioButtonLabel} {
    background: #e8b89b;
    border: 1px solid #e8b89b;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`}
`;

export const PaymentDescription = styled.div`
  font-size: 2rem;
  font-weight: 300;
  color: #555555;
`;

export const KeyField = styled.input`
  margin-bottom: 20px;

  background: #eeeeee;
  border: none;
  height: 40px;
  width: 100%;
  justify-content: space-between;
  border-radius: 10px;

  padding-left: 15px;

  border: none;
  width: 100%;
`;

export const RadioButtonContainer = styled.div`
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;

  display: flex;

  align-items: center;
`;

export const APIPart = styled.div``;

export const DescriptionLabel = styled.div`
  font-size: 40px;
`;
