import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Router = () => (
    <HashRouter>
        <>
            <Header />
            <Switch></Switch>
            <Footer />
        </>
    </HashRouter>
);

export default Router;
