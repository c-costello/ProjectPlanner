import React, { Component } from 'react';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form id="login-form">
                <label>UserName </label>
                <input name="Username" required />
                <label> Password </label>
                <input name="Password" type="password" required />
                <button type="submit">Login</button>
            </form>
            )
    }
}