import React, { Component } from 'react';
import LoginForm from './LoginForm';

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
    login(loginData) {
        const URL = "api/Account/Login"
        let data = new formData();
        data.append('Username', loginData.Username);
        data.append('Password', loginData.Password);
        fetch(URL, {
            method: "Post",
            body: data,
        }).then(response => response.json())
            .then(x => console.log(x));
    }
    static loginBox(status) {
        if (status) {
            return <p> Logged In </p>
        }
        else {
            return (
                <div>
                    <p> Please Log In </p>
                    <LoginForm formData={this.login}/>
                </div>
            )
        }
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Account.loginBox(this.state.login);

        return (
            <div id="account-box">
                {contents}
            </div>
            )
    }
}