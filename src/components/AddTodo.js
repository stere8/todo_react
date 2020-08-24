import React, {Component} from "react";
import PropTypes from 'prop-types'


export class AddTodo extends Component{
    state ={
        title : ''
    }
    onSubmit =(e) => {
        e.preventDefault()
        if (this.state.title !== ''){
            this.props.addTodo(this.state.title)
            this.setState({title: ''})
        }
        else{
            alert('Can\'t add empty Todo')
        }

    }
    onChange =(e)=>this.setState({[e.target.name]: e.target.value})
    render(){
        return(
            <div className='container'>
            <form onSubmit={this.onSubmit} style={{display:"flex"}}>
                <input
                    type= 'text'
                    name= 'title'
                    placeholder='Add todo...'
                    style={{flex:'10', padding:'5px'}}
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <input
                    type='submit'
                    value='Submit'
                    className='btn'
                    style={{flex:1}}
                />
            </form>
            </div>
        )
    }
}

AddTodo.propTypes={
    addTodo : PropTypes.func.isRequired
}

export default AddTodo
