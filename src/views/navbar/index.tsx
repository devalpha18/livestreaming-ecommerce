import React from "react";
import {HashLink as Link} from "react-router-hash-link";
import {NavbarWrapper, MenuLabel, OverLay} from "./index.style";
import {
    HeaderLink,
    MobileButton,
    MobileMenu,
    MobileMenuContent,
    MobileMenuHeader,
    MobileMenuLogoImg,
    MobileNavMenu, NavBar, NavMenuItem,
} from "../header/index.style";


export default function Navbar() {
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
        <>
            <OverLay className="overlay" onClick={() => hideMobileMenu()}></OverLay>
            <NavbarWrapper>
                <Link to="/"><MenuLabel>home</MenuLabel></Link>
                <Link to="/#about"><MenuLabel>sobre nós</MenuLabel></Link>
                <Link to="/#howto"><MenuLabel>como funciona?</MenuLabel></Link>
                <Link to="/blog"><MenuLabel>blog</MenuLabel></Link>
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
            </NavbarWrapper>
            <MobileMenu className="mobile-menu">
                <MobileMenuHeader>
                    <MobileMenuLogoImg src="/static/icons/logo.svg"/>
                </MobileMenuHeader>
                <MobileMenuContent>
                    <NavMenuItem>
                        <Link
                            to="/"
                            style={{textDecoration: "none"}}
                            onClick={hideMobileMenu}
                        >
                            <HeaderLink>HOME</HeaderLink>
                        </Link>
                    </NavMenuItem>
                    <NavMenuItem>
                        <Link
                            to="/#about"
                            style={{textDecoration: "none"}}
                            onClick={hideMobileMenu}
                        >
                            <HeaderLink>SOBRE NÓS</HeaderLink>
                        </Link>
                    </NavMenuItem>
                    <NavMenuItem>
                        <Link
                            to="/#howto"
                            style={{textDecoration: "none"}}
                            onClick={hideMobileMenu}
                        >
                            <HeaderLink>COMO FUNCIONA</HeaderLink>
                        </Link>
                    </NavMenuItem>
                    <NavMenuItem>
                        <Link
                            to="/blog"
                            style={{textDecoration: "none"}}
                            onClick={hideMobileMenu}
                        >
                            <HeaderLink>BLOG</HeaderLink>
                        </Link>
                    </NavMenuItem>
                </MobileMenuContent>
            </MobileMenu>
        </>
    );
}
