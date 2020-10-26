import React, { Component } from "react";

class UserCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: null
        }
    };
    componentDidMount() {
        this.getUserCard();
    }

    getUserCard = () => {
        fetch("https://randomuser.me/api/?results=1")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    url: data.results
                });
            });
    }

    render() {
        if (!this.state.url) {
            return "";
        }

        return <img src={this.state.url[0].picture.large} alt="Strangers" onClick={this.getUserCard} />
    }
}



export default UserCard;