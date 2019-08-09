import React, { Component, Fragment } from 'react';
import Search from './Search';
import Tiles from './Tiles';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    const { searchUserTerm, clearState, hasSpinner, users } = this.props;
    return (
      <Fragment>
        <Search searchTerm={searchUserTerm} clear={clearState} />
        {hasSpinner && <Spinner />}
        <div className='row'>
          {users.length > 0 && <Tiles profile={users} />}
        </div>
      </Fragment>
    );
  }

  static propTypes = {
    searchUserTerm: PropTypes.func.isRequired,
    clearState: PropTypes.bool.isRequired,
    hasSpinner: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
  };
}

export default Home;
