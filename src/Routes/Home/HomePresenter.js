import React from "react";
import styled from "styled-components";
import Loading from "../../Components/Loading";
import Item from "../../Components/Item";
import Top5 from "../../Components/Top5";

const Container = styled.div`
    padding-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ItemContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const TitleText = styled.span`
    font-size: 30px;
`;

const SortBy = styled.select`
    font-size: 30px;
    background-color: black;
    border: none;
    color: white;

    option {
        font-size: 15px;
    }
`;

const HomePresenter = ({
    loading,
    error,
    deals,
    top5,
    currentCategory,
    handleChange,
}) =>
    loading ? (
        <Loading />
    ) : (
        <Container>
            <Title>
                <TitleText>sorted by</TitleText>
                <SortBy onChange={handleChange} defaultValue={currentCategory}>
                    <option value="recent">recent</option>
                    <option value="Reviews">reviews</option>
                    <option value="Release">release</option>
                    <option value="Savings">savings</option>
                    <option value="Price">price</option>
                    <option value="Metacritic">metacritic</option>
                </SortBy>
            </Title>
            <Top5 top5={top5} handleChange={handleChange} />
            <ItemContainer>
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
            </ItemContainer>
        </Container>
    );

export default HomePresenter;
