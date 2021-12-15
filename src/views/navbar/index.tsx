import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import {NavbarWrapper, MenuLabel} from "./index.style";


export default function Navbar() {
    return (
        <NavbarWrapper>
            <Link to="/"><MenuLabel>home</MenuLabel></Link>
            <Link to="/#about"><MenuLabel>sobre nós</MenuLabel></Link>
            <Link to="/#howto"><MenuLabel>como funciona?</MenuLabel></Link>
            <Link to="/blog"><MenuLabel>blog</MenuLabel></Link>
        </NavbarWrapper>
    );
}
