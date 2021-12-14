import React from "react";

import { Link } from "react-router-dom";

import {
  FooterWarpper,
  FooterContainer,
  LogoPart,
  NavBar,
  Logo,
  LogoImg,
  Social,
  SocialImg,
  NavBarTop,
  NavBarTopItem,
  NavBarTopLastItem,
  NavBarLink,
  NavDivider,
  VerticalDivider,
} from "./index.style";

export default function index() {
  return (
    <FooterWarpper>
      <FooterContainer>
        <LogoPart>
          <Logo>
            <LogoImg src="/static/icons/logo-alt.svg" />
          </Logo>
          <Social>
            <a
              href="https://instagram.com/treebee.live"
              style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}
            >
              <SocialImg src="/static/icons/instagram.svg" />
            </a>
            <a
              href="https://www.facebook.com/treebeelive"
              style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}
            >
              <SocialImg src="/static/icons/facebook.svg" />
            </a>
          </Social>
        </LogoPart>
        <NavBar>
          <NavBarTop>
            <NavBarTopItem>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavBarLink>HOME</NavBarLink>
              </Link>
            </NavBarTopItem>

            <NavBarTopItem>
              <Link to="/#about" style={{ textDecoration: "none" }}>
                <NavBarLink>SOBRE NÓS</NavBarLink>
              </Link>
            </NavBarTopItem>

            <NavBarTopItem>
              <Link to="/#howto" style={{ textDecoration: "none" }}>
                <NavBarLink>COMO FUNCIONA</NavBarLink>
              </Link>
            </NavBarTopItem>

            <NavBarTopLastItem>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                <NavBarLink>BLOG</NavBarLink>
              </Link>
            </NavBarTopLastItem>
          </NavBarTop>

          <NavDivider>
            <VerticalDivider></VerticalDivider>
          </NavDivider>

          <NavBarTop style={{ marginTop: "0.5rem" }}>
            <NavBarTopItem>
              <Link to="/termos" style={{ textDecoration: "none" }}>
                <NavBarLink>Termos de uso</NavBarLink>
              </Link>
            </NavBarTopItem>

            <NavBarTopLastItem>
              <Link to="/politicas" style={{ textDecoration: "none" }}>
                <NavBarLink>Políticas de privacidade</NavBarLink>
              </Link>
            </NavBarTopLastItem>
          </NavBarTop>
        </NavBar>
      </FooterContainer>
    </FooterWarpper>
  );
}
