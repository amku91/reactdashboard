import React, { Component } from 'react';
import QuestionCounter from './QuestionCounter';
import Question from './Question';
import AnswerOptions from './AnswerOptions';
import {Panel, Col, Row} from 'react-bootstrap';

class Quiz extends Component {
    render() {
        const questionData = this.props.questionData;
        const questionTotal = this.props.questionTotal;
        const setNextQuestion = this.props.setNextQuestion;
        const setPreviousQuestion = this.props.setPreviousQuestion;
        console.log(questionData);
        return (
            <Panel key={questionData.questionId} bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">
                <QuestionCounter counter={questionData.questionId} total={questionTotal} />
                </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <Question question={questionData.question} />
                <br/>
                <AnswerOptions answers={questionData.answerOptions} />
                </Panel.Body>
                <Panel.Footer>
                <Row className="show-grid">
                <Col md={2} mdOffset={5}>
                <span className="text-left">{questionData.counter > 0 ? (<button className="Previous-btn btn btn-danger" onClick={setPreviousQuestion} >Previous</button>) : (<div></div>)}</span>&nbsp;&nbsp;
                <span className="text-right">{questionData.counter < 4 ? (<button className="next-btn btn btn-success" onClick={setNextQuestion} >Next</button>) : (<div></div>)}</span>
                </Col>
                </Row>
                </Panel.Footer>
            </Panel>
        );
    }
}

export default Quiz;