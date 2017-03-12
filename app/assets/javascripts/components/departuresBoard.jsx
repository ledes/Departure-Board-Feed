var DeparturesBoard = React.createClass({

  tableHeaders: function() {
    return (['Origin', 'Destionation', 'Trip', 'Time', 'Track', 'Status']);
  },

  render: function() {
    debugger;
    return (
      <div>
        <div>Departures Board</div>
        <div><Table headers={this.tableHeaders()} rows={this.props.tableData}/></div>
      </div>
    )
  }
})
