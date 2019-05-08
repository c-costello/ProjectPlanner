import React, { Component } from 'react';
import { CreateProject } from './CreateProject';
import { ViewProjects } from './ViewProjects';


export class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ViewProjects/>
                <CreateProject />
            </div>
        );
    }
}