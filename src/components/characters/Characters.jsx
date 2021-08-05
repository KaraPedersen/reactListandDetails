import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ id, name, image }) => (
  <Link to={`/${id}`}>
    <img src={image} alt={name} />
    <p>{name}</p>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Character;
