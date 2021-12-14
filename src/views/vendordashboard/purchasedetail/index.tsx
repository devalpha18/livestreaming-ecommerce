import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "../../../components/pagedefault";

import {
  EditPedidoWrapper,
  PedidoTitle,
  PedidoInfoTable,
  ItemsTitle,
  ItemInfoTable,
  ContactInfo,
  SubPart,
  ContactLabel,
  ContactTextField,
  ContactVendorButton,
  ContactButtonPart,
  SubItemPart,
  SubItemPartContainer,
  PedidoStatusTable,
} from "./index.style";

export default function EditPedido() {
  const [pedidoData, setPedidoData] = useState<any>([]);
  const [pedidoStatusData, setPedidoStatusData] = useState<any>([]);
  const [itemData, setItemData] = useState<any>([]);

  useEffect(() => {
    setPedidoData([]);
    setPedidoStatusData([]);
    setItemData([]);
  }, []);

  return (
    <EditPedidoWrapper>
      <Container>
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
        <PedidoStatusTable>
          <div className="StatusHeaderPart">
            <div>Nº</div>
            <div>Status do Pagamento</div>
          </div>
          <div className="StatusContentPart">
            {[...pedidoStatusData].map((eachData, index) => (
              <div key={index} className="row">
                <div>eachData.number</div>
                <div>eachData.data</div>
              </div>
            ))}
          </div>
        </PedidoStatusTable>
        <ItemsTitle>Items</ItemsTitle>
        <ItemInfoTable>
          <div className="HeaderPart">
            <div>Qtd</div>
            <div>Item</div>
            <div></div>
          </div>
          <div className="ContentPart">
            {[...itemData].map((eachData, index) => (
              <div key={index} className="row">
                <div>eachData.number</div>
                <div>eachData.data</div>
                <div>eachData.status</div>
              </div>
            ))}
          </div>
        </ItemInfoTable>
        <ContactInfo>
          <SubPart>
            <ContactLabel>Endereço*</ContactLabel>
            <ContactTextField id="address"></ContactTextField>
          </SubPart>

          <SubItemPartContainer>
            <SubItemPart>
              <ContactLabel>Número*</ContactLabel>
              <ContactTextField id="number"></ContactTextField>
            </SubItemPart>

            <SubItemPart>
              <ContactLabel>Complemento</ContactLabel>
              <ContactTextField id="complement"></ContactTextField>
            </SubItemPart>
          </SubItemPartContainer>

          <SubPart>
            <ContactLabel>Bairro*</ContactLabel>
            <ContactTextField id="complement"></ContactTextField>
          </SubPart>

          <SubItemPartContainer>
            <SubItemPart>
              <ContactLabel>Cidade*</ContactLabel>
              <ContactTextField id="complement"></ContactTextField>
            </SubItemPart>

            <SubItemPart>
              <ContactLabel>Estado*</ContactLabel>
              <ContactTextField id="complement"></ContactTextField>
            </SubItemPart>
          </SubItemPartContainer>
          <ContactButtonPart>
            <Link to="/falar-com-vendedor" style={{ textDecoration: "none" }}>
              <ContactVendorButton>
                ENTRAR EM CONTATO COM A LOJA
              </ContactVendorButton>
            </Link>
          </ContactButtonPart>
        </ContactInfo>
      </Container>
    </EditPedidoWrapper>
  );
}
