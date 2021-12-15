import styled from "styled-components";

export const SideBarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  background: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
`;

export const SideBarHeader = styled.div`
  display: flex;
`;

export const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  a{
  text-decoration: none;
  }
`;

interface MenuItemProps {
    active?: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
  padding: 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({active}) => {
    if (active) return '#c5b0971a';
    else return 'inherit';
}};
  svg{
    width: 30px;
    height: 30px;
    color: #8c8c8c;
  }
  &:hover {
    background-color: #c5b0971a;
  }
  
    
`;

export const DividerByDot = styled.span`
  font-size: 2em;
  color: #8c8c8c;
  font-weight: normal;
  text-align: center;
  cursor: pointer;
`;
