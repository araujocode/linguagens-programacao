class ContaBancaria {
    constructor(_saldo) {
        this.saldo = _saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Não é possível sacar um valor maior que o saldo");
        }
    }

    saldoAtual() {
        console.log("Seu saldo atual é: " + this.saldo);
    }    
}