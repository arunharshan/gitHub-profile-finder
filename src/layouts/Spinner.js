import React from 'react';

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div
        className='spinner-grow text-secondary'
        style={{ width: '4rem', height: '4rem' }}
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
      <div
        className='spinner-grow text-success'
        style={{ width: '4rem', height: '4rem' }}
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
      <div
        className='spinner-grow text-danger'
        style={{ width: '4rem', height: '4rem' }}
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
      <div
        className='spinner-grow text-warning'
        style={{ width: '4rem', height: '4rem' }}
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
