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
        }).then(function (response) {
            response.status     //=> number 100–599
            response.statusText //=> String
            response.headers    //=> Headers
            response.url        //=> String

            return response.text()
        }, function (error) {
            error.message //=> String
        })
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