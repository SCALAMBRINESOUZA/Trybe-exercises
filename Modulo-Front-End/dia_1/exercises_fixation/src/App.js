// import Components from './Components'
import './App.css';

const commitments = ['Estudar', 'Trabalhar', 'Cuidar Filhos', 'Fazer Almoço', 'Estudar']
const task = () => { ( <ol> { commitments.map((commitment => <li>{commitment}</li>))} </ol> )
};

function App() {
  return (task())
}

export default App;
