class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
    this.submitCoordinates = this.submitCoordinates.bind(this);
  }

  submitCoordinates() {
    var coordinates = document.getElementById('coordinates').value;
    fetch(`/coordinates/:${coordinates}`).then(data => data.json()).then(location => this.setState({
      location: location.location
    }));
  }

  render() {
    return React.createElement("div", null, React.createElement("div", null, "Enter Latitude, Longitude (Decimal Degrees)"), React.createElement("input", {
      type: "text",
      id: "coordinates",
      size: "40"
    }), React.createElement("input", {
      type: "submit",
      value: "Submit",
      onClick: () => this.submitCoordinates()
    }), React.createElement("br", null), React.createElement("a", {
      href: this.state.location,
      download: true
    }, this.state.location === '' ? '' : 'Location JSON'));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibG9jYXRpb24iLCJzdWJtaXRDb29yZGluYXRlcyIsImJpbmQiLCJjb29yZGluYXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImZldGNoIiwidGhlbiIsImRhdGEiLCJqc29uIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJSZWFjdERPTSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxRQUFRLEVBQUU7QUFEQyxLQUFiO0FBR0EsU0FBS0MsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0Q7O0FBRURELEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCLFFBQUlFLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDQyxLQUF6RDtBQUNBQyxJQUFBQSxLQUFLLENBQUUsaUJBQWdCSixXQUFZLEVBQTlCLENBQUwsQ0FDQ0ssSUFERCxDQUNNQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsSUFBTCxFQURkLEVBRUNGLElBRkQsQ0FFTVIsUUFBUSxJQUFJLEtBQUtXLFFBQUwsQ0FBYztBQUFDWCxNQUFBQSxRQUFRLEVBQUVBLFFBQVEsQ0FBQ0E7QUFBcEIsS0FBZCxDQUZsQjtBQUdEOztBQUVEWSxFQUFBQSxNQUFNLEdBQUk7QUFDUixXQUNFLGlDQUNBLCtFQURBLEVBRUE7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsRUFBRSxFQUFDLGFBQXRCO0FBQW9DLE1BQUEsSUFBSSxFQUFDO0FBQXpDLE1BRkEsRUFHQTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBQSxLQUFLLEVBQUMsUUFBM0I7QUFBb0MsTUFBQSxPQUFPLEVBQUUsTUFBTSxLQUFLWCxpQkFBTDtBQUFuRCxNQUhBLEVBSUEsK0JBSkEsRUFLQTtBQUFHLE1BQUEsSUFBSSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0MsUUFBcEI7QUFBOEIsTUFBQSxRQUFRO0FBQXRDLE9BQXdDLEtBQUtELEtBQUwsQ0FBV0MsUUFBWCxLQUF3QixFQUF4QixHQUE2QixFQUE3QixHQUFrQyxlQUExRSxDQUxBLENBREY7QUFTRDs7QUExQitCOztBQTZCbENhLFFBQVEsQ0FBQ0QsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXdCUixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBeEIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9jYXRpb246IFwiXCIsXG4gICAgfVxuICAgIHRoaXMuc3VibWl0Q29vcmRpbmF0ZXMgPSB0aGlzLnN1Ym1pdENvb3JkaW5hdGVzLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdWJtaXRDb29yZGluYXRlcygpIHtcbiAgICB2YXIgY29vcmRpbmF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29vcmRpbmF0ZXMnKS52YWx1ZTtcbiAgICBmZXRjaChgL2Nvb3JkaW5hdGVzLzoke2Nvb3JkaW5hdGVzfWApXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcbiAgICAudGhlbihsb2NhdGlvbiA9PiB0aGlzLnNldFN0YXRlKHtsb2NhdGlvbjogbG9jYXRpb24ubG9jYXRpb259KSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdj5FbnRlciBMYXRpdHVkZSwgTG9uZ2l0dWRlIChEZWNpbWFsIERlZ3JlZXMpPC9kaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvb3JkaW5hdGVzXCIgc2l6ZT1cIjQwXCI+PC9pbnB1dD5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdENvb3JkaW5hdGVzKCl9PjwvaW5wdXQ+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxhIGhyZWY9e3RoaXMuc3RhdGUubG9jYXRpb259IGRvd25sb2FkPnt0aGlzLnN0YXRlLmxvY2F0aW9uID09PSAnJyA/ICcnIDogJ0xvY2F0aW9uIEpTT04nfTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==