import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.priority}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }

}