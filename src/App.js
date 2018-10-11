import React, { Component } from 'react';
import Table from './Table';
import quizQuestions from './api/data';
import Quiz from './components/Quiz';
import {Bootstrap, Grid, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Result from './components/Result';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            questionNumber: 1,
            questionId: 1,
            question: '',
            answerOptions: [],
            allQuestions: [],
            answer: -1,
            selectedAnswers: {},
            result: [],
            showResult: false,
        };
        this.setNextQuestion = this.setNextQuestion.bind(this);
        this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.viewResult = this.viewResult.bind(this);
    }
    viewResult(){
        var answerRows = [];
        var score = 0;
        var total = this.state.allQuestions.length;
        this.state.allQuestions.map((data, i) => {
            answerRows.push({
                "question": data.question,
                "rightanswer": data.answers[data.answerindex].content,
                "youranswer": (this.state.selectedAnswers[i] ? data.answers[this.state.selectedAnswers[i]].content : '')
            });
        });
        //var score = answerRows.filter(row => row.youranswer === row.rightanswer);
        //var score = answerRows.find(row => row.youranswer === row.rightanswer);
        //var sum = answerRows.reduce((sum, row) => (row.youranswer === row.rightanswer) ? sum + 1 : sum );
        console.log("score");
        console.log(sum);
        this.setState({
            result: answerRows,
            showResult: true,
            score: (score ? ((score.length/total)*100) : 0)
        });
    }
    handleAnswerSelected(e){
        var _self = this;
        var counter = _self.state.counter;
        var obj = _self.state.selectedAnswers;
        obj[counter] = e.target.value;
        _self.setState({
            selectedAnswers: obj
        });
    }
    componentWillMount(){
        this.setState({
            question: quizQuestions[0].question,
            answerOptions : quizQuestions[0].answers,
            allQuestions : quizQuestions
          });
    }
    setNextQuestion(){
        const counter = this.state.counter + 1;
        const questionID = this.state.questionId + 1;
        this.setState({
            counter: counter,
            questionId: questionID,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: (this.state.selectedAnswers[counter] ? this.state.selectedAnswers[counter] : -1) ,
        });
    }
    setPreviousQuestion(){
        const counter = this.state.counter - 1;
        const questionID = this.state.questionId - 1;
        this.setState({
            counter: counter,
            questionId: questionID,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: (this.state.selectedAnswers[counter] ? this.state.selectedAnswers[counter] : -1),
        });
    }
    renderQuiz() {
        return (
            <Quiz questionData={this.state} questionTotal={quizQuestions.length}
            onViewResult={this.viewResult} 
            onAnswerSelected={this.handleAnswerSelected}
            setNextQuestion={this.setNextQuestion}
            setPreviousQuestion={this.setPreviousQuestion} />
        );
    }
    renderResult(){
        return (
            <Result result={this.state.result} />
        );
    }
    render() {
        return (
            <React.Fragment>
            <Navbar collapseOnSelect fixedTop={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Quiz Assignment</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        About Us
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Contact Us
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <div className="clearfix"><br/></div>
            <div className="clearfix"><br/></div>
            <div className="clearfix"><br/></div>
            <Grid fluid={true}>
                <Row className="show-grid App container-fluid">
                <Col xs={12} md={12}>
                {this.state.showResult ? this.renderResult() : this.renderQuiz()}
                </Col>
                </Row>
            </Grid>
            </React.Fragment>
        );
    }
}

export default App;