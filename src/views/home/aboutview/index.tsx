import React from "react";

import {
  AboutViewWarpper,
  AboutViewContainer,
  AboutViewTitle,
  AboutViewBottomPart,
  AboutViewContentPart,
  AboutViewContentSubPart,
  AboutViewImgPart,
  AboutViewImgSubPart,
} from "./index.style";

import Logo_Square_Light from "../../../assets/home/logo-square-light.svg";

export default function index() {
  return (
    <AboutViewWarpper id="about">
      <AboutViewContainer>
        <AboutViewTitle>Sobre Nós</AboutViewTitle>
        <AboutViewBottomPart>
          <AboutViewContentPart>
            <AboutViewContentSubPart>
              A TREEBEE é uma solução de comércio que ajuda o varejistas e
              marcas, fabricantes e outros a promover seus produtos e serviços
              em um canal ao vivo exclusivo, e proporciona experiências notáveis
              aos clientes através de compra online, elevando sua taxa de
              conversão.
              <br />
              <br />
              Melhor plataforma para apresentar seus produtos, e ainda
              proporciona a interação com seus clientes, e converter novas
              vendas em um só lugar, transmitindo sessões ao vivo.
              <br />
              <br />
              Somos uma empresa composta por pessoas que são apaixonadas por
              comércio eletrônico, marketing digital e vendas pela internet.
            </AboutViewContentSubPart>
          </AboutViewContentPart>
          <AboutViewImgPart>
            <AboutViewImgSubPart>
              <img src={Logo_Square_Light} />
            </AboutViewImgSubPart>
          </AboutViewImgPart>
        </AboutViewBottomPart>
      </AboutViewContainer>
    </AboutViewWarpper>
  );
}
