import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.refs.search.focus()
  }

  handleInputChange(e) {
    this.setState({ term: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form
        className="input-group mt-3"
        onSubmit={this.handleFormSubmit}
      >
        <input
          placeholder="Get a five day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.handleInputChange}
          ref="search"
        />
        <span className="input-group-btn">
          <button className="btn btn-primary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar)
