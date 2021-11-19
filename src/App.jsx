import './App.css';
import { Component } from 'react';
import FormIMC from './Components/FormIMC'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      texto: "Bem vindo ao imalaia"
    }
  }

  componentDidMount(){
    this.setState({texto: "Alterando o estado"})
  }

  render() {
    return (
      <div>
        <h1>Usando state</h1>
        <h1>{this.state.texto}</h1>
        <FormIMC/>
      </div>
    )
  }
}

export default App;
