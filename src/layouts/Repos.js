import React from 'react';
import PropTypes from 'prop-types';
const Repos = ({ repos }) => {
  const mtb2 = {
    marginTop: '10px',
    marginBottom: '10px'
  };
  if (!repos || repos.length <= 0)
    return (
      <div className='card' style={mtb2}>
        <div className='card-body text-center'>No Repository Found!</div>
      </div>
    );
  const repoCard = repos.map(repo => {
    return (
      <div className='card' key={repo.id} style={mtb2}>
        <div className='card-body'>
          <strong>{repo.name}</strong>
          <div>{repo.description}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h5 style={mtb2}>Repository</h5>
      {repoCard}
    </div>
  );
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired
};
export default Repos;
