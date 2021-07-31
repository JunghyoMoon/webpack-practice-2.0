import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Item from "../../Components/Item";
import Top5 from "../../Components/Top5";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HomePresenter = ({ loading, error, deals, top5, handleChange }) =>
    loading ? (
        <Loading />
    ) : (
        <Container>
            <Top5 top5={top5} handleChange={handleChange} />
            {deals.map((deal) => (
                <Item
                    key={deal.dealID}
                    thumb={deal.thumb}
                    title={deal.title}
                    normalPrice={deal.normalPrice}
                    salePrice={deal.salePrice}
                    savings={deal.savings}
                    dealID={deal.dealID}
                    steamAppID={deal.steamAppID}
                />
            ))}
        </Container>
    );

export default HomePresenter;
