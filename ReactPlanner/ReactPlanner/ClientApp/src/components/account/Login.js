import React, { Component } from 'react';
import { LoginForm } from './LoginForm';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
    }

    async sendData(lData) {
        const URL = "api/Account/Login"
        let data = new FormData();
        data.append('Username', lData.Username);
        data.append('Password', lData.Password);
        await fetch(URL, {
            method: "POST",
            body: data,
        }).then(response => response.json())
            .then(x => console.log(x));

    }

    render() {
        return (
            <div>
                <p> Please Log In </p>
                <LoginForm formData={this.sendData} />
            </div>            
        )
    }
}