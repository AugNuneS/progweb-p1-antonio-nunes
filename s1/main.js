const ContaCorrente = require('./ContaCorrente');
const ContaPoupanca = require('./ContaPoupanca');

console.log("--- CHECKPOINT: DEMONSTRAÇÃO POO ---");

const cc = new ContaCorrente("Antonio Nunes", 1000, 500);
const cp = new ContaPoupanca("Antonio Nunes", 1000);

cc.depositar(200);
cc.sacar(300);
console.log(`Conta Corrente [${cc.titular}] | Saldo: R$ ${cc.saldo}`);

cp.depositar(200);
console.log(`Conta Poupança [${cp.titular}] | Saldo (com rendimento): R$ ${cp.saldo}`);