import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Img = styled.img``;

const Savings = styled.span``;

const InfoList = styled.ul``;

const Info = styled.li`
    &:first-child {
        font-weight: 600;
    }
    &:nth-child(2) {
        text-decoration-line: line-through;
    }
`;

const Item = ({ deal }) => (
    <Container>
        <Img src={deal.thumb}></Img>
        <Savings>{`${Math.floor(parseFloat(deal.savings))}%`}</Savings>
        <InfoList>
            <Info>{deal.title}</Info>
            <Info>{`${deal.normalPrice}$`}</Info>
            <Info>{`${deal.salePrice}$`}</Info>
        </InfoList>
    </Container>
);

export default Item;
