import React from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: none;
    position: fixed;
`;

const Logo = styled.span`
    font-size: 50px;
`;

const Navigation = styled.ul`
    display: flex;
    align-items: center;
`;

const Item = styled.li`
    padding: 20px;
    border-bottom: 2px solid rgba(142, 68, 173, 0);
    &:hover {
        border-bottom-color: rgba(142, 68, 173, 1);
    }
    transition: border-bottom 0.3s ease-in-out;
`;

const Header = ({ location: { pathname } }) => (
    <Container>
        <Logo>SSI</Logo>
        <Navigation>
            <Item current={pathname === "/"}>
                <Link to="/">Home</Link>
            </Item>
            <Item current={pathname === "/steam"}>
                <Link to="/steam">Steam</Link>
            </Item>
        </Navigation>
    </Container>
);

export default withRouter(Header);
