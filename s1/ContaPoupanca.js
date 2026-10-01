const Conta = require('./Conta');

class ContaPoupanca extends Conta {
  constructor(titular, saldoInicial = 0, taxaRendimento = 0.05) {
    super(titular, saldoInicial);
    this.taxaRendimento = taxaRendimento;
  }

  depositar(valor) {
    const valorComRendimento = valor + (valor * this.taxaRendimento);
    super.depositar(valorComRendimento);
  }
}

module.exports = ContaPoupanca;