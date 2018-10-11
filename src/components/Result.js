import React from 'react';
import { Table } from 'react-bootstrap';

const Result = props => {
    var rows = props.result.map((row, i) => {
        return (
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{row.question}</td>
                <td>{row.rightanswer}</td>
                <td>{row.youranswer}</td>
            </tr>
        )
    });
    return (
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Right Answer</th>
                    <th>Your Answer</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}

export default Result;