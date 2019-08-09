import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { title, icon } = props.header[0];
  return (
    <header>
      <div className='navbar navbar-dark bg-dark shadow-sm'>
        <div className='container d-flex justify-content-between'>
          <Link to='/' className='navbar-brand d-flex align-items-center'>
            <i className={icon} />
            <strong>&nbsp;&nbsp;{title}</strong>
          </Link>
          <Link to='/about' className='navbar-brand d-flex align-items-center'>
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  header: [
    {
      title: 'Header goes here',
      icon: 'fas fa-book-reader'
    }
  ]
};
Header.propTypes = {
  header: PropTypes.array.isRequired
};

export default Header;
