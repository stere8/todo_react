import React, {Component} from 'react';
import PropTypes from "prop-types";


class TodoItem extends Component {
    getStyle = ()=>{
        return {
            background : '#d9d9d9',
            padding : '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration:
                this.props.todo.completed ?
                    'Line-through' : 'none'
    }
    }



    render(){
        const {id, title, completed} = this.props.todo

        return(
            <div style={this.getStyle()}>
                <p>
                    <input type="checkBox" onChange={this.props.markComplete.bind(this,id)} defaultChecked={completed}/>
                    {title } {id}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
       )
    }
}


//PropTypes
TodoItem.propTypes={
    todo : PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo : PropTypes.func.isRequired

}
const btnStyle = {
    background :'#ff0000',
    color : 'white',
    border: 'none',
    padding : '5px 9px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}

export default TodoItem
