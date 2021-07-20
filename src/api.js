import axios from "axios";

const main = axios.create({
    baseURL: "https://www.cheapshark.com/api/1.0/",
});

const steam = axios.create({
    baseURL: "https://store.steampowered.com/api/",
});

export const searchOptions = {
    recent: "recent",
    reviews: "Reviews",
    release: "Release",
    savings: "Savings",
    price: "Price",
    metaritic: "Metacritic",
};

export const getDeals = (option) =>
    main.get("deals", {
        params: {
            storeID: 1,
            onsale: 0,
            sortBy: option,
        },
    });

export const dealInfo = (dealID) =>
    main.get("deals", {
        params: {
            id: dealID,
        },
    });

export const gameInfo = (appId) =>
    steam.get("appdetails", {
        params: {
            appids: appId,
        },
    });

export const getStoreInfo = () => main.get("stores");
