import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./Router";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 12px;
    }
`;

const App = () => (
    <Fragment>
        <GlobalStyles />
        <Router />
    </Fragment>
);

export default App;
