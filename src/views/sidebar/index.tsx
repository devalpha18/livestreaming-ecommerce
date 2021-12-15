import React from "react";
import {Link} from "react-router-dom";
import {BiHomeAlt} from "react-icons/bi";
import {AiOutlineDropbox} from "react-icons/ai";
import {BsCardChecklist} from "react-icons/bs";
import {FiUser} from "react-icons/fi";
import {BiMoviePlay} from "react-icons/bi";
import ReactTooltip from "react-tooltip";

import {SideBarWrapper, SideBarHeader, SideBarContent, MenuItem, DividerByDot} from "./index.style";
import logoImage from "../../assets/home/logo-square-light.svg";

export default function index() {
    return (
        <SideBarWrapper>
            <SideBarHeader><img src={logoImage} width={70} height={70} alt="logo"/></SideBarHeader>
            <SideBarContent>
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
    );
}
