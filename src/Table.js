import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.tableData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.fname}</td>
                <td>{row.lname}</td>
            </tr>
        );
    });
    return (
        <tbody>{rows}</tbody>
    );
}

const TableFooter = () => {
    return (
        <tfoot>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </tfoot>
    );
}

class Table extends Component {
    render() {
        const tableData = this.props.tableData;
        return (
            <table>
                <TableHeader />
                <TableBody tableData={tableData} />
                <TableFooter />
            </table>
        );
    }
}

export default Table;