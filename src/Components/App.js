import React from "react";
import styled from "styled-components";
import reset from "styled-reset";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";

const Container = styled.div`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 12px;
    }
`;

const App = () => (
    <Container>
        <Router />
    </Container>
);

export default App;
