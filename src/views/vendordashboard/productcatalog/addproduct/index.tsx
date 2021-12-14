import React from "react";
import { Wrapper, Container, Title } from "../../../../components/pagedefault";
import {
  AddProductFormContainer,
  FormLabel,
  FormTextField,
  SubPart,
  FormSelect,
  FormImageUpload,
  ImageContainer,
  SubmitButton,
} from "./index.style";

export default function index() {
  return (
    <Wrapper>
      <Container>
        <Title>Adicionar Produto</Title>
        <AddProductFormContainer>
          <SubPart>
            <FormLabel>Nome do Produto*</FormLabel>
            <FormTextField id="productname"></FormTextField>
          </SubPart>

          <SubPart>
            <FormLabel>Quantidade em Estoque*</FormLabel>
            <FormTextField id="qty"></FormTextField>
          </SubPart>

          <SubPart>
            <FormLabel>Cor</FormLabel>
            <FormTextField
              id="color"
              placeholder="Adicionar Variação"
            ></FormTextField>
          </SubPart>

          <SubPart>
            <FormLabel>Tamanho</FormLabel>
            <FormTextField
              id="size"
              placeholder="Adicionar Variação"
            ></FormTextField>
          </SubPart>

          <SubPart>
            <FormLabel>Marca</FormLabel>
            <FormTextField id="brand"></FormTextField>
          </SubPart>

          <SubPart>
            <FormLabel>Categoria</FormLabel>
            <FormTextField placeholder="Adicionar Categoria" />
            <FormSelect id="category"></FormSelect>
          </SubPart>

          <SubPart>
            <FormLabel>Valor do Produto*</FormLabel>
            <FormTextField id="price"></FormTextField>
          </SubPart>

          <SubPart>
            <FormLabel>Imagem Destacada</FormLabel>
            <FormImageUpload>+</FormImageUpload>
          </SubPart>

          <SubPart>
            <FormLabel>Imagem Destacada</FormLabel>
            <ImageContainer>
              <FormImageUpload>+</FormImageUpload>
              <FormImageUpload>+</FormImageUpload>
            </ImageContainer>
          </SubPart>
          <SubmitButton>PUBLICAR</SubmitButton>
        </AddProductFormContainer>
      </Container>
    </Wrapper>
  );
}
