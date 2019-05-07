import React, { Component } from 'react';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleForm = this.handleForm.bind(this);
    }

    handleForm(e) {
        e.preventDefault();
        this.props.formData({ Username: e.target.Username.value, Password: e.target.Password.value });
    }

    render() {
        return (
            <form onSubmit={this.handleForm} id="login-form">
                <label>UserName </label>
                <input name="Username" required />
                <label> Password </label>
                <input name="Password" type="password" required />
                <button type="submit">Login</button>
            </form>
        )
    }
}