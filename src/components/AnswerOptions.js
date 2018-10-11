import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'react-bootstrap';

const AnswerOptions = props => {
    console.log("select ans");
    var selectedAnswer = props.selectedAnswer;
    const options = props.answers.map((row, index) => {
        return (
                <Button className={(index == selectedAnswer) ? " btn-info" : ""} key={index} id={row.type} value={index} onClick={props.onAnswerSelected}>{row.content}</Button>
    )
});
return <ButtonGroup>{options}</ButtonGroup>;
}


export default AnswerOptions;