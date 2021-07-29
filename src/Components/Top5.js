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
const Title = styled.span``;

const Games = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Game = styled.div``;

const Top5 = ({ top5 }) => (
    <Container>
        <Title>Top5 deals</Title>
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
