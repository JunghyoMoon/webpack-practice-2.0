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
            currentCategory: null,
        };
    }

    handleChange = async (event) => {
        this.setState({ loading: true });
        const {
            target: { value: keyword },
        } = event;
        try {
            const { data } = await getDeals(keyword);
            this.setState({
                deals: data.slice(5),
                top5: data.slice(0, 5),
                currentCategory: keyword,
            });
        } catch {
            this.setState({ error: "Failed to get sales info." });
        } finally {
            this.setState({ loading: false });
        }
    };

    async componentDidMount() {
        try {
            const defaultKeyword = searchOptions.metaritic;
            const { data } = await getDeals(defaultKeyword);
            this.setState({
                deals: data.slice(5),
                top5: data.slice(0, 5),
                currentCategory: defaultKeyword,
            });
        } catch {
            this.setState({ error: "Failed to get sales info." });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, error, deals, top5, currentCategory } = this.state;
        return (
            <HomePresenter
                loading={loading}
                error={error}
                deals={deals}
                top5={top5}
                currentCategory={currentCategory}
                handleChange={this.handleChange}
            />
        );
    }
}

export default HomeContainer;
