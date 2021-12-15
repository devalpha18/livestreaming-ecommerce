import styled from "styled-components";

export const NavbarWrapper = styled.div`
  padding: 20px 35px;
  display: flex;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  grid-gap: 40px;
  a{
    text-decoration: none;
  }
  position: fixed;
  width: calc(100vw - 250px);
  z-index: 1;
`
export const MenuLabel = styled.span`
  color: #ecc5ac;
  font-weight: 600;
  font-size: 1.1em;
  text-transform: uppercase;
`
