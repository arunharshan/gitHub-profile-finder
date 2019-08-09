import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import Repos from './Repos';

class Details extends Component {
  componentDidMount() {
    // passing the route parameter from the home page to the App.js file
    this.props.getUserID(this.props.match.params.user_id);
    this.props.getUserRepo(this.props.match.params.user_id);
  }

  render() {
    const {
      id,
      avatar_url,
      bio,
      company,
      email,
      followers,
      following,
      hireable,
      html_url,
      location,
      login,
      name,
      blog,
      public_repos,
      public_gists,
      updated_at,
      hasSpinner
    } = this.props.userDetails;
    if (!id || hasSpinner) {
      return (
        <Fragment>
          <div className='mb-4 ml-5'>
            <Link to='/' className='btn btn-outline-info btn-sm'>
              Back to Search
            </Link>
            <Spinner />
          </div>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className='mb-4 ml-5'>
          <Link to='/' className='btn btn-outline-info btn-sm'>
            Back to Search
          </Link>
        </div>
        <div className='mb-6'>
          <div className='row no-gutters'>
            <figure className='figure text-center'>
              <img
                src={avatar_url}
                className='rounded-circle'
                alt={name}
                style={{ width: '240px' }}
              />
              <figcaption className='figure-caption'>
                <a href={html_url} className='btn btn-link' target='_blank'>
                  Visit Git Page <i className='fas fa-external-link-alt' />
                </a>
              </figcaption>
            </figure>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5>{name}</h5>
                <h5 className='card-title text-center' />
                <hr className='my-4' />
                <p className='card-text'>
                  <strong>Bio</strong>
                  <br />
                  {bio}{' '}
                </p>
                <p className='card-text'>
                  <strong>Location</strong>
                  <br />
                  {location}
                </p>
                <p className='card-text'>
                  <strong>UserName</strong>
                  <br />
                  {login}
                </p>
                <p className='card-text'>
                  <strong>Company</strong>
                  <br />
                  {company}
                </p>
                <p className='card-text'>
                  <strong>Website</strong>
                  <br />
                  {blog}
                </p>
                <p className='card-text'>
                  <strong>Email</strong>
                  <br />
                  {email}
                </p>
                <p className='card-text'>
                  <strong>Hireable</strong> &nbsp;
                  {hireable ? (
                    <i className='far fa-check-circle text-success' />
                  ) : (
                    <i className='far fa-times-circle text-danger' />
                  )}
                </p>
                <p className='card-text'>
                  <small className='text-muted'>
                    Last updated {updated_at}
                  </small>
                </p>
                <div className='card'>
                  <div className='card-body text-center'>
                    <span className='badge badge-success'>
                      Followers: {followers}
                    </span>
                    &nbsp;
                    <span className='badge badge-danger'>
                      Following: {following}
                    </span>
                    &nbsp;
                    <span className='badge badge-warning'>
                      Public repos: {public_repos}
                    </span>
                    &nbsp;
                    <span className='badge badge-info'>
                      Public gists: {public_gists}
                    </span>
                  </div>
                </div>
                <Repos repos={this.props.userRepos} />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  static propTypes = {
    userDetails: PropTypes.object.isRequired,
    userRepos: PropTypes.array.isRequired,
    getUserRepo: PropTypes.func.isRequired,
    getUserID: PropTypes.func.isRequired
  };
}

export default Details;
