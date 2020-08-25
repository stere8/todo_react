import React, {Component} from 'react';
import './App.css';
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import Todo from './components/Todo'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import About from "./components/pages/About";
import { v4 as uuidv4 } from 'uuid';
import Axios from "axios";

class App extends Component {

    state = {
        todos:[

    ]}
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({todos: res.data}))
    }

//Toggle Complete
    markComplete = (id) => {
        this.setState({todos:this.state.todos.map(todo =>{
          if  (todo.id === id) {
              todo.completed = !todo.completed
          }
          return todo
                }

            )})
    }
    delTodo = (id) => {
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res =>this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]
            }))
        }

    addTodo = (title) =>{
        Axios.post('https://jsonplaceholder.typicode.com/todos',{
            id : uuidv4(),
            title,
            completed : false
        }).then(res =>  this.setState({todos:[...this.state.todos,res.data]}))

    }


    render(){
        return(
            <Router>
                <>
                    <Header/>
                    <Route exact path='/' render={props =>(
                        <>
                            <AddTodo addTodo = {this.addTodo}/>
                            <Todo todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
                        </>
                    )}/>
                    <Route path='/about' component={About} />

                </>
            </Router>
        )
    }
}

export default App
