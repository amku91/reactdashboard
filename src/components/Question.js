import React from 'react';
import PropTypes from 'prop-types';

const Question = props => {
return (
    <h3>{props.question}</h3>
);
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
};

export default Question;