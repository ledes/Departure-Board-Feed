var Table = React.createClass({
  // This is a reusable component to use for any table that may be needed for future features
  // for example for an Arrivals board

  propTypes: {
    headers: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    rows: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },

  renderHeaderCell: function(columnName, idx) {
    return (<th key={idx}>{columnName}</th>);
  },

  renderRow: function(row, idx) {
    return (
      <tr key={row.id}>
        {_.map(this.props.headers, function(columnName, idx){
          return (<td key={idx}>{row[columnName.toLowerCase()]}</td>);
        })}
      </tr>
    );
  },

  render: function() {
    return (
      <table className="departures-table">
        <thead><tr>{_.map(this.props.headers, this.renderHeaderCell)}</tr></thead>
        <tbody>{_.map(this.props.rows, this.renderRow)}</tbody>
      </table>
    );
  }
})
