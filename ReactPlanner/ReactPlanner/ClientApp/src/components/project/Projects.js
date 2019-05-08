import React, { Component } from 'react';
import { CreateProject } from './CreateProject';


export class Projects extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<CreateProject/>);
    }
}