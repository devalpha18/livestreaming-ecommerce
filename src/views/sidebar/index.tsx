import React from "react";
import {BiHomeAlt} from "react-icons/bi";
import {AiOutlineDropbox} from "react-icons/ai";
import {BsCardChecklist} from "react-icons/bs";
import {FiUser} from "react-icons/fi";
import {BiMoviePlay} from "react-icons/bi";

import {SideBarWrapper, SideBarHeader, SideBarContent, MenuItem, DividerByDot} from "./index.style";
import logoImage from "../../assets/home/logo-square-light.svg";

export default function index() {
    return (
        <SideBarWrapper>
            <SideBarHeader><img src={logoImage} width={70} height={70} alt="logo"/></SideBarHeader>
            <SideBarContent>
                <MenuItem active><BiHomeAlt/></MenuItem>
                <DividerByDot>...</DividerByDot>
                <MenuItem><BsCardChecklist/></MenuItem>
                <MenuItem><AiOutlineDropbox/></MenuItem>
                <MenuItem><BiMoviePlay/></MenuItem>
                <MenuItem><FiUser/></MenuItem>
            </SideBarContent>
        </SideBarWrapper>
    );
}
