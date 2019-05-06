import React, { Component } from 'react';

export class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            userData: [],
            login: false,
        }
        fetch('api/Account/LoginCheck')
            .then(response => response.json())
            .then(data => this.setState({loading: false, login: data}))
    }

    render() {
        return (
            <div id="account-box">
            </div>
            )
    }
}