import React, { Component } from "react";
import DetailsPresenter from "./DetailsPresenter";
import { dealInfo } from "../../api";

class DetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            info: null,
            game: null,
        };
    }

    async componentDidMount() {
        const {
            location: { pathname },
        } = this.props;
        const [dealID, steamAppID] = pathname.split("/")[2].split("|");
        try {
            const {
                data: { gameInfo },
            } = await dealInfo(decodeURIComponent(dealID));
            this.setState({ info: gameInfo });
        } catch {
            this.setState({ error: `Cannot get ${dealID}..` });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading, error, info } = this.state;
        return <DetailsPresenter loading={loading} error={error} info={info} />;
    }
}

export default DetailsContainer;
