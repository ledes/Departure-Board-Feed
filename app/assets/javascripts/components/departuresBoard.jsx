var DeparturesBoard = React.createClass({

  propTypes: {
    tableData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },

  tableHeaders: function() {
    return (['Time', 'Origin', 'Trip', 'Destination', 'Track', 'Status']);
  },

  //=== Dates and Time ===

  renderDayOfTheWeek: function(){
    var dateToday = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    return days[dateToday.getDay()];
  },

  renderFormadtedDated: function() {
    var dateToday = new Date();
    var mm = dateToday.getMonth() + 1;
    var dd = dateToday.getDate();
    var yy = dateToday.getFullYear();

    return mm + '-' +  dd + '-' + yy;
  },

  renderCurrentTime: function() {
    var dateToday = new Date();

    return dateToday.toLocaleString(
      'en-US',
      { hour: 'numeric', minute: 'numeric', hour12: true }
    );
  },

  //=== Render ===

  render: function() {
    return (
      <div>
        <div className={'top-info'}>
          <div className='current-day-box'>
            <div>{this.renderDayOfTheWeek()}</div>
            <div>{this.renderFormadtedDated()}</div>
          </div>
          <div>Departures Board</div>
          <div className='current-time-box'>
            <div>Current Time</div>
            <div>{this.renderCurrentTime()}</div>
          </div>
        </div>
        <div><Table headers={this.tableHeaders()} rows={this.props.tableData}/></div>
      </div>
    );
  }
})
