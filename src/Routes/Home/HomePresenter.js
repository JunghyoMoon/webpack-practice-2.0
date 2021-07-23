import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const HomePresenter = ({ loading, error, deals }) =>
    loading ? (
        <Loading />
    ) : (
        <Container>
            {deals.map((deal) => (
                <ul>
                    <li>{deal.title}</li>
                    <li>{deal.metacriticScore}</li>
                    <img src={deal.thumb} alt={deal.internalName} />
                </ul>
            ))}
        </Container>
    );

export default HomePresenter;
