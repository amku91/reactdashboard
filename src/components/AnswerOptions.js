import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'react-bootstrap';

const AnswerOptions = props => {
    const options = props.answers.map((row, index) => {
        return (
                <Button key={index} id={row.type} value={index}>{row.content}</Button>
    )
});
return <ButtonGroup>{options}</ButtonGroup>;
}


export default AnswerOptions;