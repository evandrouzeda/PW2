import './App.css';
import { Component } from 'react';
import FormIMC from './Components/FormIMC'
import Aleatorio from './Components/Aleatorios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      texto: "Bem vindo ao imalaia"
    }
  }

  state = {
    aleatorio: 0,
  }

  gerarAleatorio = (i, f) => {
    const min = Number(i)
    const max = Number(f)
    const n = Math.random() * (max - min) + min;
    this.setState({aleatorio: Math.floor(n)})
  }

  componentDidMount(){
    this.setState({texto: "Alterando o estado"})
  }

  render() {
    return (
      <div>
        <h1>Gerando Numeros Aleatorios</h1>
        <Aleatorio aleatorio={this.state.aleatorio} gerarAleatorio={this.gerarAleatorio}/>
      </div>
    )
  }
}

export default App;
