import React, { Component } from "react";

class MultiplicationTable extends Component {
  state = {
    selectedNumber: 1,
  };

  renderTable() {
    const { selectedNumber } = this.state;
    const tableRows = [];

    for (let i = 1; i <= 10; i++) {
      const product = selectedNumber * i;
      tableRows.push(
        <tr key={i}>
          <td>
            {selectedNumber} x {i}
          </td>
          <td>{product}</td>
        </tr>
      );
    }
    return (
      <table style={{ border: "1px solid black" }}>
        <tbody>{tableRows}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar</h1>
        <select
          onChange={(e) =>
            this.setState({ selectedNumber: parseInt(e.target.value) })
          }
          value={this.state.selectedNumber}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        {this.renderTable()}
      </div>
    );
  }
}

export default MultiplicationTable;
