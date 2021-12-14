import React, { ReactNode } from "react";
import styled from "styled-components";

import SideBar from "../views/sidebar";
import NavBar from "../views/navbar";

const Container = styled.div`
  /* background: #e8b89b; */
`;

export default function vendordashboard({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <Container>
      <SideBar />
      <NavBar />
      {children}
    </Container>
  );
}
