import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Container, Title } from "../../../components/pagedefault";

import {
  ProductCatalogWrapper,
  CRUDButtonContainer,
  CRUDButton,
  ProductCatalogTextField,
  ProductCatalogTable,
} from "./index.style";

export default function ProductCatalog() {
  const [catalogData, setCatalogData] = useState<any>([]);
  useEffect(() => {
    setCatalogData([]);
  }, []);

  return (
    <ProductCatalogWrapper>
      <Container>
        <Title>Catálogo</Title>
        <CRUDButtonContainer>
          <Link
            to="/addproduct"
            style={{ textDecoration: "none", width: "30%" }}
          >
            <CRUDButton color="#009933" width="100%">
              ADICIONAR ITEM
            </CRUDButton>
          </Link>
          <CRUDButton color="#ff0000" width="30%">
            EXCLUIR TUDO
          </CRUDButton>
        </CRUDButtonContainer>
        <ProductCatalogTextField placeholder="Buscar Item" />
        <ProductCatalogTable>
          <div className="HeaderPart">
            <div>Item</div>
            <div>Qtd Estoque</div>
            <div></div>
            <div>EDIT | DELETE</div>
          </div>
          <div className="ContentPart">
            {[...catalogData].map((eachData, index) => (
              <div key={index} className="row">
                <div>eachData.number</div>
                <div>eachData.data</div>
                <div></div>
                <div>eachData.status</div>
              </div>
            ))}
          </div>
        </ProductCatalogTable>
      </Container>
    </ProductCatalogWrapper>
  );
}
