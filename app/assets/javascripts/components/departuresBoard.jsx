var DeparturesBoard = React.createClass({

  propTypes: {
    tableData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  },

  getInitialState: function() {
    return {
      origin: 'North Station'
    };
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

  //=== Filters ===
  filterOrigin: function() {
    var state = this.state;
    return _.filter(this.props.tableData, function(trip){
      return trip.origin === state.origin;
    })
  },

  //=== Render ===
  render: function() {
    return (
      <div id='departures-board-page'>
        <div className='board'>
          <div className={'top-info'}>
            <div className='top-container'>
              <div>{this.renderDayOfTheWeek()}</div>
              <div>{this.renderFormadtedDated()}</div>
            </div>
            <div className='central-top-container'>{this.state.origin + ' Departures Board'}</div>
            <div className='top-container'>
              <div>Current Time</div>
              <div>{this.renderCurrentTime()}</div>
            </div>
          </div>
          <Table headers={this.tableHeaders()} rows={this.filterOrigin()}/>
        </div>
      </div>
    );
  }
})
