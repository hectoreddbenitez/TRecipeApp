import React from 'react';
import PropTypes from 'prop-types';

const RecipeInstructions = ({ instructions }) => (
  <div>
    <p data-testid="instructions">{ instructions}</p>
  </div>
);

RecipeInstructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};

export default RecipeInstructions;
