import React from 'react'
import useInput from './UseInput'
import {connect} from 'react-redux'
import { checkTodo, deleteTodo, editTodo } from '../actions'
import { fetchFn } from '../reducers/helloReducer'

function TodoList (props) {
console.log(props)
const doClick = () => {
    props.dispatch(fetchFn)
}

    const {text,dispatch} = props
    // const {todoReducer, helloReducer} = 
    console.log(props)
    console.log(text)
    const tempTitle = useInput('')

    const clickEditBtn = (tno, title)=>{
        dispatch(editTodo(tno, title))
        tempTitle.setValue(title)
    }

    const list = text.map(
        ({tno,title,completed,isEditing})=>{
            const style = completed ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}
            if(isEditing){
                console.log("isEditing",isEditing)
            return(
                
                <div className="todo-item" key = {tno} style={style} list-style={''}>
                <input type='checkbox' onChange={()=>
                    dispatch(checkTodo(tno))} checked={completed}/>
                {/* {title}  */}
                <input type='text' value={tempTitle.value} onChange={(e)=>{tempTitle.setValue(e.target.value)}}></input>

                <button onClick={()=>
                    dispatch(editTodo(tno,tempTitle.value))}>save</button>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation()
                    dispatch(deleteTodo(tno))
                }
                    
                    }>
                    &times;

                </div>
                </div>
            )
        }

        return(
                <div className="todo-item" key = {tno} style={style} list-style={''}>
                <input type='checkbox' onChange={()=>
                    dispatch(checkTodo(tno))} checked={completed}/>
                {title} 
                {/* <button onClick={()=>update(tno)}>update</button> */}
                <button onClick={()=>clickEditBtn(tno, title)}>edit</button>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation()
                    dispatch(deleteTodo(tno))
                }
                    
                    }>
                    &times;

                </div>
                
                </div>
            )
        })
    return(
        <div>
            {/* <h3>TodoList</h3> */}
            <ul>
            
            {list}
            <button onClick={doClick}></button>
            </ul>
     
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)

    const text = state.todoReducer.text
    
    return {text:text}
  }
  
  export default connect(mapStateToProps)(TodoList)