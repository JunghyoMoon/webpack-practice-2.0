import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    width: 50%;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Thumbnail = styled.img`
    width: 200px;
    border-radius: 3px;
    margin-bottom: 15px;
`;

const PriceContainer = styled.ul`
    display: flex;
    align-items: center;
`;

const PriceInfo = styled.li`
    font-size: 20px;
    margin-right: 10px;
    &:first-child {
        font-size: 30px;
        text-decoration-line: line-through;
        opacity: 0.6;
    }
    &:last-child {
        margin-right: 0px;
        font-size: 50px;
    }
`;

const MetacriticLink = styled.a`
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 3px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 30px;
        font-weight: 500;
    }
`;

const SteamLink = styled.a``;

const SteamRatingText = styled.span`
    font-size: 18px;
    margin-bottom: 40px;
`;

const DetailsPresenter = ({ loading, error, info }) =>
    loading ? (
        <Loading />
    ) : (
        <Container>
            <Thumbnail src={info.thumb} alt={info.name} />
            <Title>{info.name}</Title>
            <MetacriticLink
                href={`https://www.metacritic.com/${info.metacriticLink}`}
                target="_blank"
            >
                <span>{info.metacriticScore}</span>
            </MetacriticLink>
            <SteamRatingText>{info.steamRatingText}</SteamRatingText>
            <PriceContainer>
                <PriceInfo>{`${info.retailPrice}$`}</PriceInfo>
                <PriceInfo>→</PriceInfo>
                <PriceInfo>{`${info.salePrice}$`}</PriceInfo>
            </PriceContainer>
        </Container>
    );

export default DetailsPresenter;
