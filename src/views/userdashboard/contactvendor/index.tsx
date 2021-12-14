import React from "react";
import { SubPart } from "../editpedido/index.style";
import { useNavigate } from "react-router";

import { Wrapper, Container } from "../../../components/pagedefault";

import {
  ContactVendorTitle,
  ContactVendorFormPart,
  ContactVendorLabel,
  ContactVendorTextField,
  ContactVendorTextArea,
  SendButton,
  SubmitButtonPart,
  ButtonGroup,
} from "./index.style";

import CommonLayout from "../../../layout/common";

export default function ContactVendor() {
  let navigate = useNavigate();

  return (
    <CommonLayout>
      <Wrapper>
        <Container>
          <ContactVendorTitle>Atendimento ao Consumidor</ContactVendorTitle>
          <ContactVendorFormPart>
            <SubPart>
              <ContactVendorLabel>Assunto*</ContactVendorLabel>
              <ContactVendorTextField id="subject"></ContactVendorTextField>
            </SubPart>

            <SubPart>
              <ContactVendorLabel>Mensagem*</ContactVendorLabel>
              <ContactVendorTextArea id="message"></ContactVendorTextArea>
            </SubPart>

            <ButtonGroup>
              <SubmitButtonPart>
                <SendButton
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Voltar
                </SendButton>
              </SubmitButtonPart>
              <SubmitButtonPart>
                <SendButton>ENVIAR</SendButton>
              </SubmitButtonPart>
            </ButtonGroup>
          </ContactVendorFormPart>
        </Container>
      </Wrapper>
    </CommonLayout>
  );
}
