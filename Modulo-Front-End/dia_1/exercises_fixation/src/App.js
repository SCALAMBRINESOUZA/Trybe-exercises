// import Components from './Components'
import './App.css';

const task = () => {
  const commitments = ['Estudar', 'Trabalhar', 'Cuidar Filhos', 'Fazer Almoço', 'Estudar']
  return (
    <ol>
      <li>{commitments[0]}</li>
      <li>{commitments[1]}</li>
      <li>{commitments[2]}</li>
      <li>{commitments[3]}</li>
      <li>{commitments[4]}</li>
    </ol>
  );
}
function App() {
  return (task())
}

export default App;
