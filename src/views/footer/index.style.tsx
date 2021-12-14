import styled from "styled-components";

export const FooterWarpper = styled.div`
  background-color: #e8b89b;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const FooterContainer = styled.div`
  width: 100%;
  padding-right: 0.75rem;
  margin-right: auto;
  margin-left: auto;

  align-items: center;
  justify-content: space-between;
  display: flex;

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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LogoPart = styled.div`
  width: 33.33.%;

  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) / 2);
  padding-left: calc(var(--bs-gutter-x) / 2);
`;

export const NavBar = styled.div`
  width: 66.67%;

  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) / 2);
  padding-left: calc(var(--bs-gutter-x) / 2);
  margin-top: var(--bs-gutter-y);
  flex: 0 0 auto;

  @media (max-width: 768px) {
    margin-top: 50px;

    @media (min-width: 576px) {
      width: 540px;
    }

    @media (max-width: 575px) {
      width: 90%;
    }

    @media (min-width: 768px) {
      width: 720px;
    }
  }
`;

export const Logo = styled.div`
  width: 250px;
`;

export const LogoImg = styled.img``;

export const Social = styled.div`
  text-align: center;
  width: 250px;
  max-width: 100%;

  margin-bottom: 0%; ;
`;

export const SocialImg = styled.img`
  width: 40px;
  height: 40px;
  vertical-align: middle;
`;

export const NavBarTop = styled.div`
  text-align: right;
  display: block;

  padding-right: 0;
  padding-left: 0%;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`;

export const NavBarTopItem = styled.div`
  margin-right: 1rem;
  margin-left: 1rem;
  display: inline-block;

  @media (max-width: 768px) {
    @media (max-width: 575px) {
      margin-right: 0.3rem;
      margin-left: 0.3rem;
    }
  }
`;

export const NavBarTopLastItem = styled.div`
  margin-left: 1rem;
  display: inline-block;
  margin-right: 0;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

export const NavBarLink = styled.div`
  color: #ffffff;
  text-transform: uppercase;
  font-size: 1rem;
`;

export const NavDivider = styled.div`
  text-align: right;
`;

export const VerticalDivider = styled.div`
  max-width: 100%;
  width: 402px;
  height: 5px;
  background: #c5b097;
  border-radius: 50px;
  display: inline-block;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
