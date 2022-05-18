import PropTypes from 'prop-types';
import { Component } from 'react';
import { SearchForm, Bar } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Bar>
        <SearchForm onSubmit={this.handleSubmit}>
          <button type="submit">
            <FiSearch size="24"></FiSearch>
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Bar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
