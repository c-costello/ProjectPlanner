import React, { Component } from 'react';

export class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.Logout = this.Logout.bind(this);
    }
    Logout() {
        fetch('api/Account/Logout').then(response => response.json()).then(data => console.log(data));
    }

    render() {
        return (
            <button onClick={this.Logout}> LogOut </button>
            )
    }
}