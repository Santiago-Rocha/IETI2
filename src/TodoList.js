import React from 'react';
import { Todo } from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.todoList.map((item) =>
            <div key={item.text}>
                <Todo text={item.text} priority={item.priority} dueDate={item.dueDate} />
            </div>);
        return (<div>{listItems}</div>);
    }

}

