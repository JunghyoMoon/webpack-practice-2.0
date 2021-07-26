import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Item from "../../Components/Item";
import Slideshow from "../../Components/Slideshow";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomePresenter = ({ loading, error, deals, top5 }) =>
    loading ? (
        <Loading />
    ) : (
        <Container>
            <Slideshow top5={top5} />
            {deals.map((deal) => (
                <Item deal={deal} />
            ))}
        </Container>
    );

export default HomePresenter;
