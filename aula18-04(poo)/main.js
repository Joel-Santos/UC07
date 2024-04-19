const Conta = require('./Conta');

let c1 = new Conta('Joel Santos',100);
c1.depositar(1000);
console.log(c1.getSaldo());

c1.sacar(50);
console.table(c1);
console.log(c1.getSaldo());
c1.sacar(-5);
c1.sacar(2000);
c1.depositar('-9.5');
console.table(c1);



