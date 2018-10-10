import React, { Component } from 'react';
import QuestionCounter from './QuestionCounter';
import Question from './Question';
import AnswerOptions from './AnswerOptions';
import {Panel} from 'react-bootstrap';

class Quiz extends Component {
    render() {
        const questionData = this.props.questionData;
        const questionTotal = this.props.questionTotal;
        console.log(questionData);
        return (
            <Panel key={questionData.questionId} bsStyle="primary">
                <Panel.Heading>
                <Panel.Title componentClass="h3">
                <QuestionCounter counter={questionData.questionId} total={questionTotal} />
                </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                <Question question={questionData.questionData[0].question} />
                <br/>
                <AnswerOptions answers={questionData.questionData[0].answers} />
                </Panel.Body>
                <Panel.Footer>
                <div className="text-left">{questionData.counter > 0 ? (<button className="Previous-btn btn btn-danger" onClick={questionData.setPreviousQuestion} >Previous</button>) : (<div></div>)}</div>

                <div className="text-right">{questionData.counter < 4 ? (<button className="next-btn btn btn-success" onClick={questionData.setNextQuestion} >Next</button>) : (<div></div>)}</div>
                </Panel.Footer>
            </Panel>
        );
    }
}

export default Quiz;