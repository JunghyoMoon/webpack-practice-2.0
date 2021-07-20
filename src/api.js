import axios from "axios";

const main = axios.create({
    baseURL: "https://www.cheapshark.com/api/1.0/",
});

const steam = axios.create({
    baseURL: "",
});

const epic = axios.create({
    baseURL: "",
});

const humble = axios.create({
    baseURL: "",
});

// change epic store to gog
export const storeId = {
    steam: 1,
    gog: 7,
    humble: 11,
};

export const getDeals = {
    byStore: (num) =>
        main.get("deals", {
            params: {
                storeID: num,
            },
        }),
};

export const getStoreInfo = (storeId) => main.get("stores");
