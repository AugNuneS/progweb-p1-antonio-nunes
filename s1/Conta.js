class Conta {
  #saldo;

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  get saldo() {
    return this.#saldo;
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser positivo.");
      return;
    }
    this.#saldo += valor;
  }

  sacar(valor) {
    if (valor > this.#saldo) {
      console.log("Saldo insuficiente.");
      return false;
    }
    this.#saldo -= valor;
    return true;
  }
}

module.exports = Conta;