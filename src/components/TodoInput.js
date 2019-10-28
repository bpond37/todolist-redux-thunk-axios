import React from 'react'
import useInput from './UseInput'
import {connect} from 'react-redux'
import { addTodo } from '../actions'

function TodoInput ({dispatch}) {
    const title = useInput("")

    const sendData = () =>{
      dispatch(addTodo(title.value))
      title.setValue('')
    }
    
    return(
    <div>
        <input type='text' value={title.value} onChange={(e)=>title.setValue(e.target.value)}></input>
        <button onClick={()=>{sendData()}}>add</button>
    </div>
    )
}

const mapStateToProps = (state) => {
    const text = state.todoReducer
    
    return {text:text}
  }

export default connect(mapStateToProps)(TodoInput)
