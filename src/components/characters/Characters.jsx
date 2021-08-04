import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <section>
    <h2>{name}</h2>
    <img src={image} alt={name} />
  </section>
);

Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Character;
