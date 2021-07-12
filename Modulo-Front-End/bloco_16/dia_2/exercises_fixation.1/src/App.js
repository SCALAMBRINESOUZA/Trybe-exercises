import './App.css';
import Title from './components/Title'
import List from './components/List'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
        <Title />
        <Todo />
        <List />
     </div>
  );
}

export default App;