class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
    }
    this.submitCoordinates = this.submitCoordinates.bind(this);
  }

  submitCoordinates() {
    var coordinates = document.getElementById('coordinates').value;
    fetch(`/coordinates/:${coordinates}`)
    .then(data => data.json())
    .then(location => this.setState({location: location.location}));
  }

  render () {
    return (
      <div>
      <div>Enter Latitude, Longitude (Decimal Degrees)</div>
      <input type="text" id="coordinates" size="40"></input>
      <input type="submit" value="Submit" onClick={() => this.submitCoordinates()}></input>
      <br></br>
      <a href={this.state.location} download>{this.state.location === '' ? '' : 'Location JSON'}</a>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));