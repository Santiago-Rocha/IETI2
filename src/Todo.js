import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.text} </h1>
                <p>Prioridad: {this.props.priority}</p>
                <p>Fecha de fin: {formatDate(this.props.dueDate)}</p>
            </div>
        );
    }

    

}

function formatDate(date) {
    var monthNames = [
      "Enero", "Febrero", "Marzo",
      "Abril", "Mayo", "Junio", "Julio",
      "Agosto", "Septiembre", "Octumbre",
      "Noviembre", "Dicimebre"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' de ' + monthNames[monthIndex] + ' del ' + year;
  }