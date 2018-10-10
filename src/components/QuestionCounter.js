import React, { Component } from 'react';
import PropTypes from 'prop-types'

function QuestionCounter(props){
    console.log(props);
    return (
        <div className="question-count">
        <span>Question {props.counter} of {props.total}</span>
        {props.counter == 5 ? '<a>View Results</a>' : ''}
        </div>
    );
}

QuestionCounter.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default QuestionCounter;

