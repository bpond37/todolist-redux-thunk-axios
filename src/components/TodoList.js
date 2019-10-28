import React,{useEffect} from 'react'
import useInput from './UseInput'
import {connect} from 'react-redux'
import { checkTodo, deleteTodo, editTodo, fetchPage } from '../actions'

function TodoList (props) {
console.log(props)
const {text,dispatch} = props

    useEffect(()=>{
        const getPage = (page) => {
            dispatch(fetchPage(page))
        }
        getPage(1)
    },[dispatch])
    //if only use [] to second deps. there's an alert like below..
    //React Hook useEffect has a missing dependency: 
    //'dispatch'. Either include it or remove the dependency array
    
    
    console.log(props)
    console.log(text[0].tno)
    const tempTitle = useInput('')

    const clickEditBtn = (tno, title)=>{
        dispatch(editTodo(tno, title))
        tempTitle.setValue(title)
    }
    let list = ''
    // console.log(payload)
    if(text[0].tno===0 ){
        list = 
        <div>
            loading
        </div>
        

    } else{
        

     
    
    list =
    //  (text='loading')? 'a':
    text.map(
        ({tno,title,completed,isEditing})=>{
            const style = completed ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}
            if(isEditing){
                console.log("isEditing",isEditing)
            return(
                
                <div className="todo-item" key = {tno} style={style} list-style={''}>
                <input type='checkbox' value = {completed} onChange={()=>
                    dispatch(checkTodo(tno, title, completed))} checked={completed}/>
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
                <input type='checkbox' value={completed} onChange={(e)=>
                    dispatch(checkTodo(tno, title, completed))} checked={completed}/>
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


    }
    return(
        <div>
            {/* <h3>TodoList</h3> */}
            <ul>

            {list}

            {/* <button onClick={()=>getPage(1)}></button> */}
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