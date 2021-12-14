import React from "react";

import { Wrapper, Container } from "../../../components/pagedefault";

import {
  EditUserAccounTitle,
  EditUserAccountFormPart,
  SubPart,
  EditUserAccountLabel,
  EditUserAccountTextField,
  EditUserAccountSelect,
  SubmitButtonPart,
  SendButton,
  SubItemPartContainer,
  SubItemPart,
} from "./index.style";

import CommonLayout from "../../../layout/common";

export default function EditUserAccount() {
  return (
    <CommonLayout>
      <Wrapper>
        <Container>
          <EditUserAccounTitle>Editar dados da conta</EditUserAccounTitle>
          <EditUserAccountFormPart>
            <SubPart>
              <EditUserAccountLabel>Nome*</EditUserAccountLabel>
              <EditUserAccountTextField id="name"></EditUserAccountTextField>
            </SubPart>

            <SubPart>
              <EditUserAccountLabel>Sobrenome*</EditUserAccountLabel>
              <EditUserAccountTextField id="surname"></EditUserAccountTextField>
            </SubPart>

            <SubPart>
              <EditUserAccountLabel>E-mail*</EditUserAccountLabel>
              <EditUserAccountTextField id="email"></EditUserAccountTextField>
            </SubPart>
            <SubPart>
              <EditUserAccountLabel>CPF*</EditUserAccountLabel>
              <EditUserAccountTextField id="cpf"></EditUserAccountTextField>
            </SubPart>
            <SubPart>
              <EditUserAccountLabel>Endereço*</EditUserAccountLabel>
              <EditUserAccountTextField id="address"></EditUserAccountTextField>
            </SubPart>
            <SubItemPartContainer>
              <SubItemPart>
                <EditUserAccountLabel>Número*</EditUserAccountLabel>
                <EditUserAccountTextField id="number"></EditUserAccountTextField>
              </SubItemPart>
              <SubItemPart>
                <EditUserAccountLabel>Complemento</EditUserAccountLabel>
                <EditUserAccountTextField id="complement"></EditUserAccountTextField>
              </SubItemPart>
            </SubItemPartContainer>
            <SubPart>
              <EditUserAccountLabel>Bairro*</EditUserAccountLabel>
              <EditUserAccountTextField id="neighborhood"></EditUserAccountTextField>
            </SubPart>
            <SubItemPartContainer>
              <SubItemPart>
                <EditUserAccountLabel>Cidade*</EditUserAccountLabel>
                <EditUserAccountSelect id="city"></EditUserAccountSelect>
              </SubItemPart>
              <SubItemPart>
                <EditUserAccountLabel>Estado*</EditUserAccountLabel>
                <EditUserAccountSelect id="estado"></EditUserAccountSelect>
              </SubItemPart>
            </SubItemPartContainer>

            <SubmitButtonPart>
              <SendButton>EDITAR</SendButton>
            </SubmitButtonPart>
          </EditUserAccountFormPart>
        </Container>
      </Wrapper>
    </CommonLayout>
  );
}
