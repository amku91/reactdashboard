import React, { Component } from 'react';
import Table from './Table';
import quizQuestions from './api/data';
import Quiz from './components/Quiz';
import {Bootstrap, Grid, Row, Col, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

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
            answer: '',
            selectedAnswers: {},
            result: '',
        };
        this.setNextQuestion = this.setNextQuestion.bind(this);
        this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
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
            answer: '',
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
            answer: '',
        });
    }
    renderQuiz() {
        return (
            <Quiz questionData={this.state} questionTotal={quizQuestions.length} 
            setNextQuestion={this.setNextQuestion}
            setPreviousQuestion={this.setPreviousQuestion} />
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
            <Grid>
                <Row className="show-grid App container-fluid">
                <Col xs={12} md={12}>
                {this.renderQuiz()}
                </Col>
                </Row>
            </Grid>
            </React.Fragment>
        );
    }
}

export default App;