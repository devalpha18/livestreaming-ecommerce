import React, { ReactNode } from "react";
import Header from "../views/header";
import Footer from "../views/footer";
export default function common({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
