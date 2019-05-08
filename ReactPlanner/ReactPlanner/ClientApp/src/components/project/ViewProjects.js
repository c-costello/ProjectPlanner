import React, { Component } from 'react';

export class ViewProjects extends React.Component {
    constructor(props) {
        super(props)
        this.state = { projects: [], loading: true };
        fetch('api/Project/GetProjects')
            .then(response => response.json())
            .then(data => { this.setState({ projects: data, loading: false }) });
    }
    renderProject(projects) {
        return (
            <div>
            <h3> Current Projects </h3>
            {projects.map(project => 
                <div>
                    <p><span>Title:</span> {project.Title} </p>
                    <p><span>Description:</span> {project.Description} </p>
                    <p><span>Final Due Date:</span> {project.FinalDueDate} </p>
                    <p><span>ID:</span> {project.ID} </p>
                </div>                    
                )}
            </div>
        )
    };
    render() {
        let contents = ViewProject.renderProject(this.state.projects);
        return {contents};
    }
}