import { Component } from "react";

export default class FormIMC extends Component {
    state = {
        peso: 0,
        altura: 0,
        imc: 0,
        classificacao: "normal"
    }

    calcular = _ => {
        const imc = Number(this.state.peso) / Math.pow(this.state.altura, 2)
        this.setState({ imc: imc })
        if (imc < 18.5)
            this.setState({ classificacao: "Magreza" })
        else if (imc >= 18.5 || imc < 25)
            this.setState({ classificacao: "Normal" })
        else if (imc >= 25 || imc < 30)
            this.setState({ classificacao: "Sobrepeso" })
        else if (imc >= 30 || imc < 40)
            this.setState({ classificacao: "Obesidade" })
        else
            this.setState({ classificacao: "Obesidade Grave" })
    }

    render() {
        return (
            <div>
                <h1>Calcule seu IMC</h1>
                <label htmlFor="peso">Peso</label>
                <input id="peso" type="text" value={this.state.peso}
                    onChange={
                        e => this.setState({ peso: e.target.value })
                    } />
                <label htmlFor="altura">Altura</label>
                <input id="altura" type="text" value={this.state.altura}
                    onChange={
                        e => this.setState({ altura: e.target.value })
                    } />

                <button type="button" onClick={_ => this.calcular()}>Calular</button>
                <h1>Resultado: {this.state.imc}</h1>
                <h1>Classificação: {this.state.classificacao}</h1>
            </div>
        )
    }
}