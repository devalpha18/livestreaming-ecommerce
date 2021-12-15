import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  background: transparent;

  position: absolute;
  top: 0;

  svg {
    vertical-align: middle;
  }
`;

export const HeaderContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;

  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 0.75rem;
  padding-left: 0.75rem;

  max-width: 90%;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const HeaderLogo = styled.div`
  cursor: pointer;
`;

export const HeaderLogoImg = styled.img`
  height: 90px;
  vertical-align: middle;
`;

export const NavBar = styled.div`
  display: flex;

  align-items: center;
`;

export const NavMenu = styled.div`
  display: block;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavMenuItem = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  display: inline-block;
  cursor: pointer;

  @media (max-width: 992px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 100%;
    display: block;
  }
`;

export const HeaderLink = styled.div`
  color: #c5b097;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  font-family: var(--bs-font-sans-serif);

  @media (max-width: 992px) {
    font-weight: 400;
  }
`;

export const UserAction = styled.div``;

export const BroadcastButton = styled.a``;

export const UserButton = styled.button`
  cursor: pointer;
  color: #e8b89b;
  font-weight: 600;
  border-radius: 50%;
  background-color: transparent;
  border: 0;
`;

export const MobileNavMenu = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
  }
`;

export const MobileButton = styled.button`
  cursor: pointer;
  color: #e8b89b;
  font-weight: 600;
  border-radius: 50%;
  background-color: transparent;
  border: none;
`;

export const MobileMenu = styled.div`
  right: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  transition: 0.3s;

  z-index: 99999;

  background-color: #ffffff;
  position: fixed;
  display: flex;
  flex-direction: column;

  transform: translateX(100%);

  &.visible {
    transform: translateX(0%);
  }
`;

export const MobileMenuHeader = styled.div`
  background-color: #ffffff;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  display: flex;
`;

export const MobileMenuContent = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const MobileMenuLogoImg = styled.img`
  vertical-align: middle;
  width: 150px;
`;

export const OverLay = styled.div`
  &.visible {
    opacity: 1;
    pointer-events: initial;
    visibility: visible;
  }

  pointer-events: none;
  opacity: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;

  top: 0;
`;
