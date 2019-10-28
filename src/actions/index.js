
import axios from 'axios'

export const fetchPage = (page) => {
  return (dispatch) => {
      console.log("fetchPage: " + page)
      console.log(dispatch)
      // dispatch({type:'START_GET_PAGE'})
      axios.get("http://localhost:8080/todo/pages/" + page)
      .then(res => dispatch({type:'END_GET_PAGE', payload: res.data}))
  }
}

export const checkTodo = (tno,title,completed) =>{
  return (dispatch)=>{
    axios.put("http://localhost:8080/todo/"+tno,{tno:tno, title:title,completed:!completed})
    .then(dispatch({
      type:'CHECK_TODO',
      tno
    }))
  }
}

export const addTodo = (title) => {
  console.log("addTodo...")
  return (dispatch) =>{
    axios.post("http://localhost:8080/todo/new",{title:title})
    .then(res=>dispatch(
      {
        type:'ADD_TODO',
        title
      }
    ))
  }
}


export const deleteTodo = (tno)=>{
  return (dispatch) =>{
    axios.delete("http://localhost:8080/todo/"+tno)
    .then(dispatch(
      {
        type:'DELETE_TODO',
        tno
      }
    ))
  }
}

export const editTodo = (tno,title,completed)=>{
  return (dispatch)=>{
    axios.put("http://localhost:8080/todo/"+tno,{tno:tno, title:title})
    .then(dispatch({
      type:'EDIT_TODO',
      title,
      tno
    }))
  }

}
