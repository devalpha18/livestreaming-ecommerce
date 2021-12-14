import React from "react";

import {
  HowtoViewWrapper,
  HowtoViewContainer,
  HowtoViewTitle,
  HowtoViewBottomPart,
  HowtoViewBottomLeftPart,
  HowtoViewBottomRightPart,
  ContentPart,
  ContentItem,
  ContentText,
} from "./index.style";

import Phone from "../../../assets/home/phone.png";

export default function index() {
  return (
    <HowtoViewWrapper id="howto">
      <HowtoViewContainer>
        <HowtoViewTitle>Como Funciona?</HowtoViewTitle>
        <HowtoViewBottomPart>
          <HowtoViewBottomLeftPart>
            <ContentPart>
              <ContentItem>
                <span>1</span>
                <ContentText>Nome da Loja</ContentText>
              </ContentItem>
              <ContentItem>
                <span>2</span>
                <ContentText>Vídeo da Live</ContentText>
              </ContentItem>
              <ContentItem>
                <span>3</span>
                <ContentText>Produtos exibidos</ContentText>
              </ContentItem>
              <ContentItem>
                <span>4</span>
                <ContentText>Chat de perguntas</ContentText>
              </ContentItem>
              <ContentItem className="LastItem">
                <span>5</span>
                <ContentText>Visualizações ativas</ContentText>
              </ContentItem>
            </ContentPart>
          </HowtoViewBottomLeftPart>
          <HowtoViewBottomRightPart>
            <img src={Phone} />
          </HowtoViewBottomRightPart>
        </HowtoViewBottomPart>
      </HowtoViewContainer>
    </HowtoViewWrapper>
  );
}
