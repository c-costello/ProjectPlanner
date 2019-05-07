import React, { Component } from 'react';
import { Login } from './Login';
import { Logout } from './Logout';

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
            .then(data => this.setState({ loading: false, login: data.isLoggedIn, userData: data.FullName }));
        console.log(this.state);
    }

    static loginBox(status) {
        if (status) {
            return (
                <div>
                    <p> Logged In </p>
                    <Logout />
                </div>
                )
            
        }
        else {
            return (
                <Login />
            )
        }
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Account.loginBox(this.state.login);

        return (
            <div id="account-box">
                <div>
                    {contents}
                </div>
            </div>
            )
                
    }
}