import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Tiles = props => {
  const userTile = props.profile.map(user => {
    return (
      <div className='col-md-3' key={user.id}>
        <div className='card mb-4 shadow-sm'>
          <img
            className='bd-placeholder-img card-img-top'
            width='100%'
            height='100%'
            focusable='false'
            alt='profile pic'
            aria-label='Placeholder: Thumbnail'
            src={user.avatar_url}
          />
          <div className='card-body'>
            <h4 className='card-text'>{user.login}</h4>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <Link
                  to={`/details/${user.login}`}
                  className='btn btn-outline-info btn-sm'
                >
                  Details
                </Link>
              </div>
              <small className='text-muted'>
                <i className='fas fa-user-shield' /> {user.type}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return userTile;
};
Tiles.propTypes = {
  profile: PropTypes.array.isRequired
};
export default Tiles;
