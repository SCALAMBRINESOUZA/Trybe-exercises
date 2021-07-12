import { connect } from 'react-redux'
  function Title(props) {
    return (
    <>
      <h2>Todo</h2>
      <h3>Possui {props.counter} Tarefas</h3>
    </>
  )
}

const mapStateToProps = (state) => ({
  counter: state.todoReducer.counterTask
})

export default connect(mapStateToProps)(Title)