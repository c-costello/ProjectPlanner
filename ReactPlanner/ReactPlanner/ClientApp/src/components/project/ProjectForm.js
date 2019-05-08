import React, { Component } from 'react';

export class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
    }
    const form = (
        <form>
            <label>Title</label>
            <input name="title" required />
            <label>Description</label>
            <input name="description" type="text" required />
            <label> Final Due Date </label>
            <input name="finalDueDate" type="date" required />
            <label>Color</label>
            <select name="Color">
                <option value="0"> Blue </option>
                <option value="1"> Green </option>
                <option value="2"> Yellow </option>
                <option value="3"> Orange </option>
            </select>
        </form>
        )
    render() {
        return ();
    }
}