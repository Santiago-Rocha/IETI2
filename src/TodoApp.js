import React from 'react';
import { TodoList } from './TodoList'


export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '', priority : 1, dueDate : new Date() };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
            </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Titulo de la tarea"
            name="text"
          />
          <input
            id="new-priority"
            onChange={this.handleChange}
            placeholder="Prioridad de la tarea"
            type="number" min="1"
            value={this.state.priority}
            name="priority"
          />
          
          <input
            id="new-dueDate"
            onChange={this.handleChange}
            type="date"
            name="dueDate"
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    const tmpItem = {}
    tmpItem[e.target.name] = e.target.value
    this.setState(tmpItem);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    var date = new Date(this.state.dueDate)
    const newItem = {
      text: this.state.text,
      dueDate: new Date(date.setDate(date.getDate() +1)),
      priority: this.state.priority
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
      priority : 0, 
      dueDate : new Date()
    }));
  }

  componentDidMount(e) {
    this.setState(prevState => ({
      items: prevState.items.concat(this.props.items)
    }));
  }
}