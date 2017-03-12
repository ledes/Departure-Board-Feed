
var Table = React.createClass({
  // This is a reusable component to use for any table that may be needed for future features
  // for example for an Arrivals board

  renderHeaderCell: function(columnName, idx) {
    return (<th key={idx}>{columnName}</th>);
  },

  renderRow: function(row, idx) {
    rowkeys = _.omit(_.keys(row), 'id');
    return (
      <tr key={row.id}>
        {_.map(rowkeys, function(key){
          // returns a cell for each key
          return (<td>{row[key]}</td>);
        })}
      </tr>
    );
  },

  render: function() {
    return (
      <table className="departures-table">
        <thead><tr>{this.props.headers.map(this.renderHeaderCell)}</tr></thead>
        <tbody>{this.props.rows.map(this.renderRow)}</tbody>
      </table>
    );
  }
})
