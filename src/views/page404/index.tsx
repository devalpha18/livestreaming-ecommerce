import React from "react";

import {Link} from "react-router-dom";

//Insert the Component
import {
    NotFoundPageWrapper,
    NotFountPageContainer,
    NotFountPageTitle,
    BackHomeButtonPart,
    BackHomeButton,
} from "./index.style";
import CommonLayout from "../../layout/common";
import Header from "../header";
import Footer from "../footer"


export default function index() {
    return (
        <>
            <NotFoundPageWrapper>
                <NotFountPageContainer>
                    <NotFountPageTitle>
                        <p>Not Found Page</p>
                        <p>404</p>
                    </NotFountPageTitle>
                    <BackHomeButtonPart>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <BackHomeButton>Back</BackHomeButton>
                        </Link>
                    </BackHomeButtonPart>
                </NotFountPageContainer>
            </NotFoundPageWrapper>
        </>
    );
}
