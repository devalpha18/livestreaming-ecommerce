import React from "react";

// import { Link } from "react-router-dom";

import { HashLink as Link } from "react-router-hash-link";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderLogoImg,
  HeaderLink,
  NavBar,
  NavMenu,
  NavMenuItem,
  UserAction,
  BroadcastButton,
  UserButton,
  MobileNavMenu,
  MobileButton,
  MobileMenu,
  MobileMenuHeader,
  MobileMenuContent,
  MobileMenuLogoImg,
  OverLay,
} from "./index.style";

export default function index() {
  const showMobileMenu = () => {
    var element = document.querySelector(".mobile-menu");
    element?.classList.add("visible");

    var element = document.querySelector(".overlay");
    element?.classList.add("visible");
  };

  const hideMobileMenu = () => {
    var element = document.querySelector(".mobile-menu");
    element?.classList.remove("visible");

    var element = document.querySelector(".overlay");
    element?.classList.remove("visible");
  };

  return (
    <HeaderWrapper>
      <OverLay className="overlay" onClick={() => hideMobileMenu()}></OverLay>
      <HeaderContainer>
        <HeaderLogo>
          <Link to="/">
            <HeaderLogoImg src="/static/icons/logo.svg" />
          </Link>
        </HeaderLogo>
        <NavBar>
          <NavMenu>
            <NavMenuItem>
              <Link to="/" style={{ textDecoration: "none" }}>
                <HeaderLink>HOME</HeaderLink>
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link to="/#about" style={{ textDecoration: "none" }}>
                <HeaderLink>SOBRE NÓS</HeaderLink>
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link to="/#howto" style={{ textDecoration: "none" }}>
                <HeaderLink>COMO FUNCIONA</HeaderLink>
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link to="/blog" style={{ textDecoration: "none" }}>
                <HeaderLink>BLOG</HeaderLink>
              </Link>
            </NavMenuItem>
          </NavMenu>
          <UserAction>
            {/* <BroadcastButton></BroadcastButton> */}

            <Link to="/">
              <UserButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ verticalAlign: "middle" }}
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  ></path>
                </svg>
              </UserButton>
            </Link>
          </UserAction>
          <MobileNavMenu>
            <MobileButton onClick={() => showMobileMenu()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="#e8b89b"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
            </MobileButton>
          </MobileNavMenu>
          <MobileMenu className="mobile-menu">
            <MobileMenuHeader>
              <MobileMenuLogoImg src="/static/icons/logo.svg" />
            </MobileMenuHeader>
            <MobileMenuContent>
              <NavMenuItem>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  onClick={hideMobileMenu}
                >
                  <HeaderLink>HOME</HeaderLink>
                </Link>
              </NavMenuItem>
              <NavMenuItem>
                <Link
                  to="/#about"
                  style={{ textDecoration: "none" }}
                  onClick={hideMobileMenu}
                >
                  <HeaderLink>SOBRE NÓS</HeaderLink>
                </Link>
              </NavMenuItem>
              <NavMenuItem>
                <Link
                  to="/#howto"
                  style={{ textDecoration: "none" }}
                  onClick={hideMobileMenu}
                >
                  <HeaderLink>COMO FUNCIONA</HeaderLink>
                </Link>
              </NavMenuItem>
              <NavMenuItem>
                <Link
                  to="/blog"
                  style={{ textDecoration: "none" }}
                  onClick={hideMobileMenu}
                >
                  <HeaderLink>BLOG</HeaderLink>
                </Link>
              </NavMenuItem>
            </MobileMenuContent>
          </MobileMenu>
        </NavBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
