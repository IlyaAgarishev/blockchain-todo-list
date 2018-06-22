import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header';
import AddTask from './Components/AddTask';

class Todo extends Component {
    render() {
        return (
            <div className="webSite">
                <Header />
                <AddTask />
            </div>
        );
    }
}


ReactDOM.render(<Todo />, document.getElementById('root'))
