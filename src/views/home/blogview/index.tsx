import React from "react";

import { Link } from "react-router-dom";

import {
  BlogViewWrapper,
  BlogViewContainer,
  BlogViewTitle,
  BlogViewContentPart,
  BlogViewItemPart,
  BlogViewItem,
  BlogItemTitle,
  BlogItemLink,
  BlogLinkButton,
  BlogButtonContainer,
} from "./index.style";

import Blog1 from "../../../assets/home/blog1.png";
import Blog2 from "../../../assets/home/blog2.png";

export default function index() {
  return (
    <BlogViewWrapper>
      <BlogViewContainer>
        <BlogViewTitle>Blog</BlogViewTitle>
        <BlogViewContentPart>
          <BlogViewItemPart>
            <BlogViewItem src={Blog1} />
            <BlogItemTitle>O que é Live Shop?</BlogItemTitle>
            <BlogItemLink>Leia mais &gt;</BlogItemLink>
          </BlogViewItemPart>
          <BlogViewItemPart>
            <BlogViewItem src={Blog2} />
            <BlogItemTitle>Conheça o Live Stream Shopping</BlogItemTitle>
            <BlogItemLink>Leia mais &gt;</BlogItemLink>
          </BlogViewItemPart>
        </BlogViewContentPart>
        <BlogButtonContainer>
          <Link to="/blog" style={{ textDecoration: "none" }}>
            <BlogLinkButton>MAIS POSTAGENS</BlogLinkButton>
          </Link>
        </BlogButtonContainer>
      </BlogViewContainer>
    </BlogViewWrapper>
  );
}
