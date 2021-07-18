import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Container = styled.div``;

const Header = () => (
    <Container>
        <div>Header</div>
    </Container>
);

export default withRouter(Header);
