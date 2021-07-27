import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { getDeals, searchOptions } from "../../api";

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            deals: null,
            top5: null,
        };
    }

    async componentDidMount() {
        try {
            const { data } = await getDeals(searchOptions.metaritic);
            this.setState({ deals: data.slice(5), top5: data.slice(0, 5) });
        } catch {
            this.setState({ error: "Failed to get sales info." });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, error, deals, top5 } = this.state;
        return (
            <HomePresenter
                loading={loading}
                error={error}
                deals={deals}
                top5={top5}
            />
        );
    }
}

export default HomeContainer;
