import React from "react";

import {
  CustomLoadingWrapper,
  CustomLoadingContent,
  Label,
} from "./index.style";

export default function index() {
  return (
    <CustomLoadingWrapper>
      <CustomLoadingContent>
        Carregando
        <Label />
      </CustomLoadingContent>
    </CustomLoadingWrapper>
  );
}
