import React, { Component } from 'react';

export class DeleteProject extends React.Component {
    constructor(props) {
        super(props)
    }
    Delete(id) {
        const formData = new FormData();
        formData.append('ID', id);
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