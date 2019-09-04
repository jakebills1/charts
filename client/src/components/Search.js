import React from "react";
import axios from "axios";
import Charts from "./Charts";
class Search extends React.Component {
  state = {
    search_term: [],
    search_type: "name",
    search_results: [],
    resultsVisible: false
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { search_term, search_type } = this.state;
    axios
      .get(`/api/search?search_term=${search_term}&search_type=${search_type}`)
      .then(res => {
        this.setState({
          search_term: "",
          search_type: "",
          search_results: res.data,
          resultsVisible: true
        });
      });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search_term">Search for:</label>
          <input
            type="text"
            placeholder="Search for a chart..."
            name="search_term"
            id="search_term"
            value={this.state.search_term}
            onChange={this.handleChange}
          />
          <label htmlFor="dropdown">Search by:</label>
          <select
            name="search_type"
            id="dropdown"
            value={this.state.search_type}
            onChange={this.handleChange}
          >
            <option value="name">Name</option>
            <option value="artist">Artist</option>
            <option value="genre">Genre</option>
            <option value="group">Group</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        {this.state.resultsVisible && (
          <Charts charts={this.state.search_results} />
        )}
      </>
    );
  }
}
export default Search;
