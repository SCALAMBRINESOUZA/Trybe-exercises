import React from 'react'
import { connect } from "react-redux";
import * as TodoAction from '../actions/todoAction'

function Todo(props) {
  let textInput = React.createRef();
  
  const addTaskOnStore = () => {
    const value = textInput.current.value
    props.addTask(value)
  }
    
  return (
      <>
      <div>
        <input ref={ textInput } type='text' placeholder='Informe sua nova tarefa...' />
      </div>
      <button onClick={addTaskOnStore}>Adicionar</button>
      </>
    );
  }

  const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(TodoAction.addTask(task))
  })

  export default connect(null, mapDispatchToProps)(Todo);