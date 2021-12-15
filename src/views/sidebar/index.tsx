import React from "react";
import {Link} from "react-router-dom";
import {BiHomeAlt} from "react-icons/bi";
import {AiOutlineDropbox} from "react-icons/ai";
import {BsCardChecklist} from "react-icons/bs";
import {FiUser} from "react-icons/fi";
import {BiMoviePlay} from "react-icons/bi";
import ReactTooltip from "react-tooltip";

import {SideBarWrapper, SideBarHeader, SideBarContent, MenuItem, DividerByDot, OverLay} from "./index.style";
import logoImage from "../../assets/home/logo-square-light.svg";


import {
    HeaderLink,
    MobileButton,
    MobileMenu,
    MobileMenuContent,
    MobileMenuHeader,
    MobileMenuLogoImg,
    MobileNavMenu, NavBar, NavMenuItem,
} from "../header/index.style";

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
        <>

        <OverLay className="overlay" onClick={() => hideMobileMenu()}></OverLay>
        <SideBarWrapper>
            <SideBarHeader><img src={logoImage} width={70} height={70} alt="logo"/></SideBarHeader>
            <SideBarContent>
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
                <Link to="/vendor-dashboard" data-tip data-for="dashboard-tip">
                    <MenuItem><BiHomeAlt/></MenuItem>
                </Link>
                <ReactTooltip id='dashboard-tip' effect='solid'>
                    <span>Painel de Gerenciamento</span>
                </ReactTooltip>
                <DividerByDot>...</DividerByDot>
                <Link to="/configurepayment" data-tip
                      data-for="configurepayment">
                    <MenuItem><BsCardChecklist/></MenuItem>
                </Link>
                <ReactTooltip id='configurepayment' effect='solid'>
                    <span>Configurar Pagamentos</span>
                </ReactTooltip>
                <Link to="/productcatalog" data-tip
                      data-for="productcatalog">
                    <MenuItem><AiOutlineDropbox/></MenuItem>
                </Link>
                <ReactTooltip id='productcatalog' effect='solid'>
                    <span>Gerenciar Produtos</span>
                </ReactTooltip>
                <Link to="/lives" data-tip data-for="lives">
                    <MenuItem><BiMoviePlay/></MenuItem>
                </Link>
                <ReactTooltip id='lives' effect='solid'>
                    <span>Gerenciar Lives</span>
                </ReactTooltip>
                <Link to="/user" data-tip data-for="user">
                    <MenuItem><FiUser/></MenuItem>
                </Link>
                <ReactTooltip id='user' effect='solid'>
                    <span>Editar Conta</span>
                </ReactTooltip>
            </SideBarContent>
        </SideBarWrapper>
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
