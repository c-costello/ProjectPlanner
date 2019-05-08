import React, { Component } from 'react';
import { DeleteProject } from './DeleteProject';

export class ViewProjects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { projects: [], loading: true };
        fetch('api/Project/GetAllProjects')
            .then(response => response.json())
            .then(data => { this.setState({ projects: data, loading: false }) });
    }
    static renderProject(projects) {
        return (
            <div>
            <h3> Current Projects </h3>
                {projects.map(project =>
                    <div key={project.id}>
                        <p><span>Title:</span> {project.title} </p>
                        <p><span>Description:</span> {project.description} </p>
                        <p><span>Final Due Date:</span> {project.finalDueDate} </p>
                        <p><span>ID:</span> {project.id} </p>
                        <DeleteProject Delete={project.id} />    
                </div>                    
                )}
            </div>
        )
    };
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ViewProjects.renderProject(this.state.projects);
        return <div>{contents}</div>;
    }
}