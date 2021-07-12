const INITIAL_STATE = {
    tasks: [],
    counterTask: 0,
  }
  function todoReducer(state = INITIAL_STATE, action) {
    
    if(action.type === 'ADD_TASK') {
      return {
        tasks: [...state.tasks, action.task],
        counterTask: state.counterTask + 1
      }
    }

    return state
  }
  
  export default todoReducer;