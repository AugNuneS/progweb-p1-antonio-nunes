const Conta = require('./Conta');

class ContaCorrente extends Conta {
  constructor(titular, saldoInicial = 0, limite = 500) {
    super(titular, saldoInicial);
    this.limite = limite;
  }

  sacar(valor) {
    if (valor > this.saldo + this.limite) {
      console.log("Limite de crédito excedido.");
      return false;
    }

    const saldoDisponivel = this.saldo;
    if (valor > saldoDisponivel) {
      const resto = valor - saldoDisponivel;
      super.sacar(saldoDisponivel);
      this.limite -= resto;
    } else {
      super.sacar(valor);
    }
    return true;
  }
}

module.exports = ContaCorrente;