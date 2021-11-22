import { Component } from "react";

export default class Aleatorio extends Component {
    state = {
        inicio: 0,
        fim: 10
    }
    render() {
        return (
            <div>
                <h2>Numero gerado: {this.props.aleatorio}</h2>
                <form>
                    <label htmlFor="inicio">Inicio</label>
                    <input type="text" value={this.state.inicio} onChange={
                        e => this.setState({ inicio: e.target.value })} />
                    <label htmlFor="fim">Fim</label>
                    <input type="text" value={this.state.fim} onChange={
                        e => this.setState({ fim: e.target.value })} />
                    <button type="button" onClick={_ => this.props.gerarAleatorio(this.state.inicio, this.state.fim)}>Gerar</button>
                </form>
            </div>

        )
    }
}