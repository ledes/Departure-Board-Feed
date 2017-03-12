var DeparturesBoard = React.createClass({

  propTypes: {
    tableData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },

  tableHeaders: function() {
    return (['Origin', 'Destination', 'Trip', 'Time', 'Track', 'Status']);
  },

  render: function() {
    return (
      <div>
        <div>Departures Board</div>
        <div><Table headers={this.tableHeaders()} rows={this.props.tableData}/></div>
      </div>
    );
  }
})
