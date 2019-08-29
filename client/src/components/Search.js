import React from "react";
import axios from "axios";
class Search extends React.Component {
  state = { search_term: "", search_type: "" };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { search_term, search_type } = this.state;
    axios
      .get(`/api/search?search_term=${search_term}&search_type=${search_type}`)
      .then(res => {
        debugger;
      });
  };
  render() {
    return (
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
          <option value="name" selected>
            Name
          </option>
          <option value="artist">Artist</option>
          <option value="genre">Genre</option>
          <option value="group">Group</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Search;
