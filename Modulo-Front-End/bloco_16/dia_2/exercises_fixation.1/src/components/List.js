import { connect } from "react-redux";

function List({ tasks }) {
    return (
      <div>
        <ul>
          {tasks.map((task, index) => <li key ={index}>{task}</li>)}
        </ul>
      </div>
    )
}

const mapStateToProps =(state) => ({
  tasks: state.todoReducer.tasks
});


  export default connect(mapStateToProps)(List);