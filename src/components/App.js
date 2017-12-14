import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, clearTasks } from '../actions';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    addTask() {
        this.props.addTask(this.state.text, this.state.dueDate);
    }

    deleteTask(id) {
        this.props.deleteTask(id);
    }

    renderTasks() {
        const { tasks } = this.props;
        return (
            <ul className="list">
                {
                    tasks.map(task => {
                        return (
                            <li key={task.id} className="list-item">
                                <div className="list-item">
                                    <div>{task.text}</div>
                                    <div><em>{task.dueDate}</em></div>
                                </div>
                                <div className="list-item" 
                                     onClick={() => this.deleteTask(task.id)}>&#x2715;</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <Header />
                <h2 className="App_title">
                    What should you do?
                </h2>
                <form className="form">
                    <input className="form-control" 
                           placeholder="Type what you have to do" 
                           onChange={event => this.setState({text: event.target.value})} />
                    <input className="form-control" 
                           type="datetime-local" 
                           onChange={event => this.setState({dueDate: event.target.value})} />
                    <button type="button" onClick={() => this.addTask()}>Add task</button>
                    <button type="button" onClick={() => this.props.clearTasks()}>Clear list</button>
                </form>
                {this.renderTasks()}
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tasks: state
    }
}

export default connect(mapStateToProps, { addTask, deleteTask, clearTasks })(App);