import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ name, time, avatar }) => (
  <div className="post-header">
    <img className="avatar" src={avatar} alt="avatar" />
    <div className="post-header-container">
      <strong>{name}</strong>
      <span>{time}</span>
    </div>
  </div>
);

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
