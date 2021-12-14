import React from "react";

import { Link } from "react-router-dom";

import Shop from "../../../assets/home/shop.svg";
import Bag from "../../../assets/home/bag.svg";
import Bee from "../../../assets/home/bee.svg";

import {
  JoinViewWrapper,
  JoinViewContainer,
  JoinViewTitlePart,
  JoinViewButtonPart,
  SubButtonPart,
  IconPart,
  TextPart,
  ButtonPart,
  IconImg,
  DividerPart,
  Divider,
} from "./index.style";

export default function index() {
  return (
    <JoinViewWrapper>
      <JoinViewContainer>
        <JoinViewTitlePart>
          Faça parte da
          <br />
          nossa colméia!
          <img src={Bee} />
        </JoinViewTitlePart>
        <JoinViewButtonPart>
          <SubButtonPart>
            <IconPart>
              <IconImg src={Shop}></IconImg>
            </IconPart>
            <TextPart>Vendedor</TextPart>
            <Link to="vendor">
              <ButtonPart>PARTICIPAR</ButtonPart>
            </Link>
          </SubButtonPart>
          <DividerPart>
            <Divider></Divider>
          </DividerPart>
          <SubButtonPart>
            <IconPart>
              <IconImg src={Bag}></IconImg>
            </IconPart>
            <TextPart>Comprador</TextPart>
            <Link to="/cliente">
              <ButtonPart>PARTICIPAR</ButtonPart>
            </Link>
          </SubButtonPart>
        </JoinViewButtonPart>
      </JoinViewContainer>
    </JoinViewWrapper>
  );
}
