import React from "react";

import { Link } from "react-router-dom";

import {
  HeroViewWrapper,
  HeorViewContainer,
  HeroViewTitle,
  HeroViewContent,
  HeroViewButton,
  HeroContentPart,
  HeroViewMobileButton,
  HeroViewMobileButtonContainer,
} from "./index.style";

export default function index() {
  return (
    <HeroViewWrapper>
      <HeorViewContainer>
        <HeroContentPart>
          <HeroViewTitle>
            <p>A sua plataforma</p>
            <p>shopstreaming.</p>
          </HeroViewTitle>
          <HeroViewContent>
            <p>Fácil e inovador. Veja os produtos</p>
            <p>através dos vídeos em Live Stream.</p>
          </HeroViewContent>
          <Link to="/verlives" style={{ textDecoration: "none" }}>
            <HeroViewButton>ver lives</HeroViewButton>
          </Link>
        </HeroContentPart>
      </HeorViewContainer>
      <HeroViewMobileButtonContainer>
        <Link to="/verlives" style={{ textDecoration: "none" }}>
          <HeroViewMobileButton>ver lives</HeroViewMobileButton>
        </Link>
      </HeroViewMobileButtonContainer>
    </HeroViewWrapper>
  );
}
