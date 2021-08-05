import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image, _id }) => (
  <section>
    <p>{name}</p>
    <img src={image} />
    <p>{_id}</p>
  </section>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

export default Character;
