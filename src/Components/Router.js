import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// page components
import Home from "../Routes/Home";
import Steam from "../Routes/Steam";
import Details from "../Routes/Details";

const Router = () => (
    <HashRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/steam" component={Steam} />
                <Route path="/details/:id" component={Details} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    </HashRouter>
);

export default Router;
