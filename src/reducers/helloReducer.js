import axios from 'axios'

export const fetchFn = (dispatch) =>{
  console.log("test hello axios......")
  dispatch({type:"START_LOADING"})
  axios.get('http://172.20.10.2:8080/sample/hello')
  .then(res=>{
    console.log(res.data)
    dispatch({type:"END_LOADING"})
  })
}

function helloReducer( state={text:''}, action){
    console.log("helooReducer.....",state,action)

    const {type} = action

    let newState = state

    if(type === 'START_LOADING'){
        newState = {text: "로딩 중 "}
    }else if (type === 'END_LOADING'){
        newState = {text: '로딩 완료'}
    }
    return newState
}

export default helloReducer