import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
`;

const TitleText = styled.span``;

const SortBy = styled.select`
    background-color: black;
    border: none;
    color: white;
`;

const Games = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Top5 = ({ top5, handleChange }) => (
    <Container>
        <Title>
            <TitleText>Top5 deals: sorted by</TitleText>
            <SortBy onChange={handleChange}>
                <option value="recent">recent</option>
                <option value="Reviews">reviews</option>
                <option value="Release">release</option>
                <option value="Savings">savings</option>
                <option value="Price">price</option>
                <option value="Metacritic" selected>
                    metacritic
                </option>
            </SortBy>
        </Title>
        <Games>
            {top5.map((game) => (
                <Item
                    key={game.dealID}
                    thumb={game.thumb}
                    title={game.title}
                    normalPrice={game.normalPrice}
                    salePrice={game.salePrice}
                    savings={game.savings}
                    dealID={game.dealID}
                    steamAppID={game.steamAppID}
                />
            ))}
        </Games>
    </Container>
);

export default Top5;
