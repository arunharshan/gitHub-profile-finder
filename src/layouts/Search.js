import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Search extends Component {
  state = {
    userText: '',
    isInfo: false
  };
  getUserNameHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitHandler = e => {
    // send to the props value . this goes to the parent container.
    e.preventDefault();
    if (this.state.userText.length <= 2) {
      this.setState({ isInfo: true });
    } else {
      this.props.searchTerm(this.state.userText);
      this.setState({ userText: '', isInfo: false });
    }
  };

  onClearSearchResultHandler = () => {
    this.setState({ userText: '', isInfo: false });
    this.props.searchTerm(null);
  };

  render() {
    return (
      <section className='jumbotron text-center'>
        <div className='container'>
          <form onSubmit={this.onSubmitHandler}>
            <div className='input-group mb-3 input-group-lg'>
              <input
                type='text'
                name='userText'
                className='form-control'
                placeholder='Search Git User.. (Eg: Arun Harshan)'
                aria-label='Git username search'
                aria-describedby='search text box'
                value={this.state.userText}
                onChange={this.getUserNameHandler}
              />
              <div className='input-group-append'>
                <button
                  type='submit'
                  className='btn btn-warning'
                  type='button'
                  name='searchBtn'
                  onClick={this.onSubmitHandler}
                >
                  Search
                </button>
                {this.props.clear && (
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={this.onClearSearchResultHandler}
                  >
                    Clear Results
                  </button>
                )}
              </div>
            </div>
            {this.state.isInfo && (
              <p className='text-danger text-left'>
                Please enter atleast 3 characters{' '}
              </p>
            )}
          </form>
        </div>
      </section>
    );
  }
  static propTypes = {
    searchTerm: PropTypes.func.isRequired,
    clear: PropTypes.bool.isRequired
  };
}

export default Search;
