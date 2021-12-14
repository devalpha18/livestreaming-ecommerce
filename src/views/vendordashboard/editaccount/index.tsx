import React from "react";

import { Wrapper, Container, Title } from "../../../components/pagedefault";

import {
  EditUserAccountFormPart,
  SubPart,
  EditUserAccountLabel,
  EditUserAccountTextField,
  SubItemPartContainer,
  SubItemPart,
  EditUserAccountSelect,
  SubmitButtonPart,
  SendButton,
  FileUpload,
  RadioButtonsContainer,
  AccountRadioButton,
} from "./index.style";

export default function index() {
  return (
    <Wrapper>
      <Container>
        <Title>Editar dados da conta</Title>

        <EditUserAccountFormPart>
          <SubPart>
            <EditUserAccountLabel>
              Imagem da Loja (200px x 200px)*
            </EditUserAccountLabel>
            <FileUpload></FileUpload>
          </SubPart>
          <SubPart>
            <RadioButtonsContainer></RadioButtonsContainer>
            <EditUserAccountTextField></EditUserAccountTextField>
          </SubPart>
          <SubPart>
            <EditUserAccountLabel>Nome*</EditUserAccountLabel>
            <EditUserAccountTextField id="name"></EditUserAccountTextField>
          </SubPart>

          <SubPart>
            <EditUserAccountLabel>Sobrenome*</EditUserAccountLabel>
            <EditUserAccountTextField id="surname"></EditUserAccountTextField>
          </SubPart>

          <SubPart>
            <EditUserAccountLabel>Razão Social*</EditUserAccountLabel>
            <EditUserAccountTextField id="social"></EditUserAccountTextField>
          </SubPart>
          <SubPart>
            <EditUserAccountLabel>E-mail*</EditUserAccountLabel>
            <EditUserAccountTextField id="email"></EditUserAccountTextField>
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
  );
}
