import React, { Component } from 'react';

export class DeleteProject extends React.Component {
    constructor(props) {
        super(props)
        this.Delete = this.Delete.bind(this);
    }
    Delete() {
        const formData = new FormData();
        formData.append('ID', this.props.ID);
        fetch('api/Project/DeleteProject', {
            method: "Post",
            body: formData,
        }).then(response => response.json())
            .then(data => console.log(data));
    }
    render() {
        return (<button onClick={this.Delete}> Delete Project </button>);
    }
}