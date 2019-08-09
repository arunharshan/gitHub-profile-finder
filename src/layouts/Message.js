import React from 'react';
import PropTypes from 'prop-types';

const Message = props => {
  const { isMessage, type, text } = props.message[0];
  return (
    isMessage && (
      <div className={`alert ${type}`} role='alert'>
        <i className='far fa-comment-alt' /> {text}
      </div>
    )
  );
};
Message.propTypes = {
  message: PropTypes.array.isRequired
};

export default Message;
