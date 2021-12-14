import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  UserDashboardWrapper,
  UserDashboardContainer,
  Title,
  ButtonGroup,
  TablePart,
  TableTitle,
  UserTable,
  Button,
} from "./index.style";

import CommonLayout from "../../layout/common";

export default function UserDashboard() {
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    setUserData([]);
  }, []);

  return (
    <CommonLayout>
      <UserDashboardWrapper>
        <UserDashboardContainer>
          <Title>Painel de Usuário</Title>
          <ButtonGroup>
            <div className="eachButtonPart">
              <Link to="/editar-pedido" style={{ textDecoration: "none" }}>
                <Button>pedidos</Button>
              </Link>
            </div>
            <div className="eachButtonPart">
              <Link to="/edituser" style={{ textDecoration: "none" }}>
                <Button>editar dados</Button>
              </Link>
            </div>
          </ButtonGroup>
          <TablePart>
            <TableTitle>Pedidos</TableTitle>
            <UserTable>
              <div className="HeaderPart">
                <div>Nº</div>
                <div>Data</div>
                <div>Status</div>
              </div>
              <div className="ContentPart">
                {[...userData].map((eachData, index) => (
                  <div key={index} className="row">
                    <div>eachData.number</div>
                    <div>eachData.data</div>
                    <div>eachData.status</div>
                  </div>
                ))}
              </div>
            </UserTable>
          </TablePart>
        </UserDashboardContainer>
      </UserDashboardWrapper>
    </CommonLayout>
  );
}
