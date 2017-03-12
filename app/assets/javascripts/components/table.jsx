var Table = React.createClass({

  renderHeaderCell: function(column, idx) {
    return (<th key={idx}>{column}</th>);
  },

  renderRow: function(row, idx) {
    return (
      <tr key={row.id}>
        {this.props.headers.map((column, columnIdx) {
          <td key={columnIdx}>

          </td>
        })}
      </tr>
    )
  },

  render: function() {
    // <tbody>{this.props.rows.map(this.renderRow)}</tbody>
    return (
      <table className="departures-table">
        <thead><tr>{this.props.headers.map(this.renderHeaderCell)}</tr></thead>
      </table>
    )
  }
})
