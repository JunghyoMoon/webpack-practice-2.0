import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Logo = styled.span``;

const Navigation = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const Item = styled.li``;

const Header = ({ location: { pathname } }) => (
    <Container>
        <Logo>MSSI</Logo>
        <Navigation>
            <Item current={pathname === "/"}>
                <Link to="/">Home</Link>
            </Item>
            <Item current={pathname === "/steam"}>
                <Link to="/steam">Steam</Link>
            </Item>
            <Item current={pathname === "/epic"}>
                <Link to="/epic">Epic</Link>
            </Item>
            <Item current={pathname === "/humble"}>
                <Link to="/humble">Humble</Link>
            </Item>
        </Navigation>
    </Container>
);

export default withRouter(Header);
