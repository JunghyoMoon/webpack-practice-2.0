import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 20%;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    width: 185px;
    margin-bottom: 10px;
`;

const Savings = styled.span``;

const Title = styled.span`
    width: 60%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 25px;
`;

const InfoList = styled.ul`
    display: flex;
    align-items: baseline;
`;

const Info = styled.li`
    margin-right: 5px;
    &:first-child {
        text-decoration-line: line-through;
    }
    &:nth-child(3) {
        font-size: large;
    }
    &:last-child {
        margin-right: 0px;
    }
`;

const Item = ({ deal }) => (
    <Container>
        <Img src={deal.thumb} />
        <Title>{deal.title}</Title>
        <InfoList>
            <Info>{`${deal.normalPrice}$`}</Info>
            <Info>→</Info>
            <Info>{`${deal.salePrice}$`}</Info>
            <Info>{`${parseInt(deal.savings)}%`}</Info>
        </InfoList>
    </Container>
);

export default Item;
