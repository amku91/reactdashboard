import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    constructor(){
        super();
        this.state = {
            tableData: [
                {
                    fname: "Amit",
                    lname: "Kumar"
                },
                {
                    fname: "Sumit",
                    lname: "Kumar"
                },
                {
                    fname: "Akash",
                    lname: "Kumar"
                },
                {
                    fname: "Akash1",
                    lname: "Kumar1"
                },
                {
                    fname: "Akash1",
                    lname: "Kumar1"
                },
            ],
        };
    }
    render() {
        return (
            <div className="App">
                <h1>Hello ! React</h1>
                <div className="continer">
                <Table tableData={this.state.tableData} />
                </div>
            </div>
        );
    }
}

export default App;