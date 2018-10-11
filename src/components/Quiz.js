import React, { Component } from 'react';
import QuestionCounter from './QuestionCounter';
import Question from './Question';
import AnswerOptions from './AnswerOptions';
import {Panel, Col, Row} from 'react-bootstrap';
import axios from 'axios';

class Quiz extends Component {
    constructor(){
        super();
        this.handleQuestionAnswer = this.handleQuestionAnswer.bind(this);
    }
    handleQuestionAnswer(){
        //console.log('success');
        // axios.get('https://api.github.com/users/amku91')
        // .then(response => {console.log(response)}, error => {});
    }
    render() {
        const questionData = this.props.questionData;
        const questionTotal = this.props.questionTotal;
        const setNextQuestion = this.props.setNextQuestion;
        const setPreviousQuestion = this.props.setPreviousQuestion;
        const onViewResult = this.props.onViewResult;
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
                <AnswerOptions selectedAnswer={this.props.questionData.answer} answers={questionData.answerOptions} onAnswerSelected={this.props.onAnswerSelected} />
                </Panel.Body>
                <Panel.Footer>
                <Row className="show-grid">
                <Col md={6} mdOffset={3}>
                <span className="text-left">{questionData.counter > 0 ? (<button className="Previous-btn btn btn-danger" onClick={(event) => {setPreviousQuestion();this.handleQuestionAnswer();}} >Previous</button>) : (<div></div>)}</span>&nbsp;&nbsp;
                <span className="text-right">{questionData.counter < 4 ? (<button className="next-btn btn btn-primary" onClick={setNextQuestion} >Next</button>) : (<div></div>)}</span>
                <span className="pull-right" style={{"marginTop": '-35px'}}>{questionData.counter == 4 ? (<button className="next-btn btn btn-success" onClick={onViewResult} >View Result</button>) : (<div></div>)}</span>
                </Col>
                </Row>
                </Panel.Footer>
            </Panel>
        );
    }
}

export default Quiz;