import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Container, Title } from "../../components/pagedefault";

import {
  VendorDashboardWrapper,
  VendorEachPage,
  VendorPageIcon,
  VendorEachPageContainer,
  VendorTableContainer,
  PedidoTitle,
  PedidoInfoTable,
  PedidoButtonContainer,
  VendorButton,
  VendorLiveButtonContainer,
  LiveButtonContainer,
} from "./index.style";

import Gateway from "../../assets/vendordashboard/gateway.png";
import Catalog from "../../assets/vendordashboard/catalog.png";
import Video from "../../assets/vendordashboard/video.png";

import VendorDashboardLayout from "../../layout/vendordashboard";

export default function VendorDashboard() {
  const [pedidoData, setPedidoData] = useState<any>([]);

  useEffect(() => {
    setPedidoData([]);
  }, []);

  return (
    <VendorDashboardLayout>
      <VendorDashboardWrapper>
        <Container>
          <VendorEachPageContainer>
            <VendorEachPage>
              <div className="IconPart">
                <Link to="/configurepayment" style={{ textDecoration: "none" }}>
                  <VendorPageIcon src={Gateway} />
                </Link>
              </div>
              <Link to="/configurepayment" style={{ textDecoration: "none" }}>
                <Title>
                  Configurar
                  <br />
                  Pagamentos
                </Title>
              </Link>
            </VendorEachPage>
            <VendorEachPage>
              <div className="IconPart">
                <Link to="/productcatalog" style={{ textDecoration: "none" }}>
                  <VendorPageIcon src={Catalog} />
                </Link>
              </div>
              <Link to="/productcatalog" style={{ textDecoration: "none" }}>
                <Title>
                  Gerenciar
                  <br />
                  Produtos
                </Title>
              </Link>
            </VendorEachPage>
            <VendorEachPage>
              <div className="IconPart">
                <Link to="/lives" style={{ textDecoration: "none" }}>
                  <VendorPageIcon src={Video} />
                </Link>
              </div>
              <Link to="/lives" style={{ textDecoration: "none" }}>
                <Title>
                  Gerenciar
                  <br />
                  Lives
                </Title>
              </Link>
            </VendorEachPage>
          </VendorEachPageContainer>
          <VendorTableContainer>
            <PedidoTitle>Pedido</PedidoTitle>
            <PedidoInfoTable>
              <div className="HeaderPart">
                <div>Nº</div>
                <div>Data</div>
                <div>Status</div>
              </div>
              <div className="ContentPart">
                {[...pedidoData].map((eachData, index) => (
                  <div key={index} className="row">
                    <div>eachData.number</div>
                    <div>eachData.data</div>
                    <div>eachData.status</div>
                  </div>
                ))}
              </div>
            </PedidoInfoTable>
            <PedidoButtonContainer>
              <VendorButton>VER MAIS</VendorButton>
            </PedidoButtonContainer>
          </VendorTableContainer>
          <VendorLiveButtonContainer>
            <PedidoTitle>Lives</PedidoTitle>
            <LiveButtonContainer>
              <VendorButton>AGENDAR LIVE</VendorButton>
              <VendorButton>INICIAR LIVE</VendorButton>
            </LiveButtonContainer>
          </VendorLiveButtonContainer>
        </Container>
      </VendorDashboardWrapper>
    </VendorDashboardLayout>
  );
}
