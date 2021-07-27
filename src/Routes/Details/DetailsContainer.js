import React, { Component } from "react";
import DetailsPresenter from "./DetailsPresenter";
import { dealInfo, gameInfo } from "../../api";

class DetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            price: null,
            game: null,
        };
    }

    async componentDidMount() {
        const {
            location: { pathname },
        } = this.props;
        const [dealID, steamAppID] = pathname.split("/")[2].split("|");
        console.log(dealID);
        try {
            const price = await dealInfo(dealID);
            console.log(price);
        } catch {
            this.setState({ error: `Cannot get ${dealID}..` });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        return <DetailsPresenter />;
    }
}

export default DetailsContainer;
