import React from "react";
import {NavbarWrapper, MenuLabel} from "./index.style";


export default function Navbar() {
    return (
        <NavbarWrapper>
            <MenuLabel>home</MenuLabel>
            <MenuLabel>sobre nós</MenuLabel>
            <MenuLabel>como funciona?</MenuLabel>
            <MenuLabel>blog</MenuLabel>
        </NavbarWrapper>
    );
}
