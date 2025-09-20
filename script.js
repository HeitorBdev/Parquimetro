// Parquimetro Script Poo

class Parquimetro {
    // Atributos
    constructor(tempoEscolhido,valorPago){
    this.tempoEscolhido = parseInt(tempoEscolhido);
    this.valorPago = parseFloat(valorPago);
    this.valorNecessario = this.definirValor();
    this.troco = 0
    }

    // método1 ()
    definirValor(){
        // comportamento
        switch (this.tempoEscolhido){
            case 30:
                return 1.00;
            case 60:
                return 1.75;
            case 120:
                return 3.00;
            default:
                return 0
        }
    }

    // método2 ()
    calcularTroco(){
        // comportamento
        if (this.valorPago < this.valorNecessario){
            return `Valor insuficiente para ${this.tempoEscolhido} minutos.`;
        }
        else {
            this.troco = this.valorPago - this.valorNecessario;
            return `Tempo concedido: ${this.tempoEscolhido} minutos. Troco: R$ ${this.troco.toFixed(2)}`;
        }
    }
}

document.getElementById('calcular').addEventListener("click", () => {
    const tempo = document.getElementById("tempo").value;
    const valor = document.getElementById("valor").value;
    const resultado = document.getElementById("resultado");

    const parquimetro = new Parquimetro(tempo, valor);
    resultado.innerText = parquimetro.calcularTroco();
});
