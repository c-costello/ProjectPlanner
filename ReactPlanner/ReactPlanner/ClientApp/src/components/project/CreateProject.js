import React, { Component } from 'react';
import { ProjectForm } from './ProjectForm';

export class CreateProject extends React.Component {
    constructor(props) {
        super(props)
        this.sendData = this.sendData.bind(this);
    }
    async sendData(project) {
        const url = 'api/Project/CreateProject';
        const formData = new FormData();
        formData.append('Title', project.Title);
        formData.append('Description', project.Description);
        formData.append('Color', project.Color);
        formData.append('FinalDueDate', project.FinalDueDate);
        await fetch(url, {
            method: "POST",
            body: formData
        }).then(response => response.json).then(data => console.log(data));
    }
    render() {
        return (<ProjectForm ProjectData={this.sendData}/>);
    }
}