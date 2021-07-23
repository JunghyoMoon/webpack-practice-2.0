import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Item = styled.span`
    font-size: 30px;
    font-weight: 500;
`;

const Loading = () => (
    <Container>
        <Item role="img">🔨</Item>
        <Item>Loading...</Item>
    </Container>
);

export default Loading;
