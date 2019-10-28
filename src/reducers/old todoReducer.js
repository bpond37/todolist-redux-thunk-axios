const initialTodos = [
  {tno :3 , title : 'cc'},
  {tno :2 , title : 'bb'},
  {tno :1 , title : 'aa', completed:true},
]

function todoReducer(state = {text:initialTodos},action){
  console.log("todoReducer......", state, action)
  //select target index with tno to check, delete, edit 
  const arr = state.text.slice()
  const target = arr.filter(obj => obj.tno === action.tno)[0]
  const index = arr.indexOf(target)

  switch (action.type) {
    case 'CHECK_TODO':
      arr[index] = Object.assign(target, {completed : !target.completed})
      return {text:arr}

    case 'ADD_TODO':
      arr.splice(0,0,{tno: arr[0].tno+1, title: action.title})
      return {text:arr}

    case 'DELETE_TODO':
      arr.splice(index,1)
      return {text:arr}

    case 'EDIT_TODO':
      arr[index] = Object.assign(target, {isEditing : !target.isEditing})

      if(target.isEditing){
        return {text:arr}
      }else{
        arr.splice(index,1,{tno:action.tno,title:action.title})
        return {text:arr}
      }
    default:
      return state
  }
}

export default todoReducer