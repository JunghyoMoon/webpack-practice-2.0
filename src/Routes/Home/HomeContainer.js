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

    handleChange = async (event) => {
        this.setState({ loading: true });
        const {
            target: { value },
        } = event;
        try {
            const { data } = await getDeals(value);
            this.setState({ deals: data.slice(5), top5: data.slice(0, 5) });
        } catch {
            this.setState({ error: "Failed to get sales info." });
        } finally {
            this.setState({ loading: false });
        }
    };

    async componentDidMount() {
        try {
            const { data } = await getDeals(searchOptions.metacritic);
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
                handleChange={this.handleChange}
            />
        );
    }
}

export default HomeContainer;
