import React, { useState } from "react";

import {Title } from "../../../components/pagedefault";

import {
  ConfigurePaymentContent,
  ButtonContainer,
  SaveButton,
  PaymentOptionContainer,
  PaymentOption,
  RadioButton,
  RadioButtonLabel,
  PaymentDescription,
  KeyField,
  RadioButtonContainer,
  APIPart,
  DescriptionLabel,
  ConfigContainer
} from "./index.style";

export default function ConfigurePayment() {
  const handleSave = () => {
    console.log("aaa");
  };

  const [select, setSelect] = useState("juno");
  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelect(value);

    console.log("aaa");
  };
  return (
      <ConfigContainer>
        <Title>Gateway de Pagamento</Title>
        <ConfigurePaymentContent>
          Selecione uma das opções abaixo, crie sua conta no gateway e insira
          suas chaves abaixo para receber seus pagamentos.
        </ConfigurePaymentContent>
        <PaymentOptionContainer>
          <PaymentOption>
            <RadioButtonContainer>
              <RadioButton
                type="radio"
                name="radio"
                value="juno"
                checked={select === "juno"}
                onChange={(event) => handleSelectChange(event)}
              />
              <RadioButtonLabel />
              <DescriptionLabel>Juno</DescriptionLabel>
            </RadioButtonContainer>
            <APIPart style={{ display: select === "juno" ? "block" : "none" }}>
              <PaymentDescription>Chave Pública</PaymentDescription>
              <KeyField readOnly={true} />
            </APIPart>
          </PaymentOption>

          <PaymentOption>
            <RadioButtonContainer>
              <RadioButton
                type="radio"
                name="radio"
                value="yapay"
                checked={select === "yapay"}
                onChange={(event) => handleSelectChange(event)}
              />
              <RadioButtonLabel />
              <DescriptionLabel>yapay</DescriptionLabel>
            </RadioButtonContainer>
            <APIPart style={{ display: select === "yapay" ? "block" : "none" }}>
              <PaymentDescription>Chave Pública</PaymentDescription>
              <KeyField readOnly={true} />
            </APIPart>
          </PaymentOption>

          <PaymentOption>
            <RadioButtonContainer>
              <RadioButton
                type="radio"
                name="radio"
                value="pagar.me"
                checked={select === "pagar.me"}
                onChange={(event) => handleSelectChange(event)}
              />
              <RadioButtonLabel />
              <DescriptionLabel>pagar.me</DescriptionLabel>
            </RadioButtonContainer>
            <APIPart
              style={{ display: select === "pagar.me" ? "block" : "none" }}
            >
              <PaymentDescription>Chave Pública</PaymentDescription>
              <KeyField readOnly={true} />
            </APIPart>
          </PaymentOption>
        </PaymentOptionContainer>
        <ButtonContainer>
          <SaveButton onClick={() => handleSave()}>
            SALVAR CONFIGURAÇÃO
          </SaveButton>
        </ButtonContainer>
      </ConfigContainer>
  );
}
