import { Component } from 'react';
import './App.css';
import InputText from './InputText';
import Select from './Select'
import InputNumber from './InputNumber';
import TextArea from './TextArea'

class App extends Component {
  render() {
    return (
      <form>
        <Select />
        <InputText />
        <InputNumber />
        <TextArea />
      </form>
    );
  }
}

export default App;
