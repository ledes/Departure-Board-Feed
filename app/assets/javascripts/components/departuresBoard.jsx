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
    return (['Time', 'Trip', 'Destination', 'Track', 'Status']);
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
  renderFilterTabs: function(){
    var state = this.state;
    var tabs =['North Station', 'South Station'];
    return (
      <ul id='station-tab'>
        <li><a className={'tab north-tab ' + (state.origin === 'North Station' ? 'active-tab' : "")}
               onClick={_.partial(this.onAction, {action: 'SEE_NORTH_STATION'})}>North Station</a></li>
        <li><a className={'tab south-tab ' + (state.origin === 'South Station' ? 'active-tab' : "")}
               onClick={_.partial(this.onAction, {action: 'SEE_SOUTH_STATION'})}>South Station</a></li>
      </ul>
    );
  },

  filterOrigin: function() {
    var state = this.state;
    return _.filter(this.props.tableData, function(trip){
      return trip.origin === state.origin;
    })
  },

  onAction: function(payload) {
    switch (payload.action) {
      case "SEE_NORTH_STATION":
        if (this.state.origin === 'South Station') {
          this.setState({origin: 'North Station'});
        }
        break;
      case "SEE_SOUTH_STATION":
        if (this.state.origin === 'North Station') {
          this.setState({origin: 'South Station'});
        }
        break;
      default:
        console.warn("Caution! Action '" + payload.action + "' was not handled.");

    }
  },

  //=== Render ===
  render: function() {
    return (
      <div id='departures-board-page'>
        {this.renderFilterTabs()}
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
