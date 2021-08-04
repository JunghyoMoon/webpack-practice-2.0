import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Container = styled.div`
    width: 90%;
    margin: 15px 0px;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    border-radius: 10px;
`;

const Games = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Title = styled.h1`
    position: relative;
    background-color: black;
    padding: 0px 25px;
    font-size: 25px;
    top: -35px;
`;

const Top5 = ({ top5 }) => (
    <Container>
        <Title>Top 5 deals</Title>
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
