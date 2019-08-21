import React from 'react';
import { Todo } from './Todo'

export class Board extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.todoList.map((item) =>
            <div key={item.name}>
                <Todo name={item.text} priority={item.priority} description={item.description} />
            </div>);
        return (<div>{listItems}</div>);
    }

}

