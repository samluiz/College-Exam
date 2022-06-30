class Conta {
  constructor (num, cliente, dataAbertura, agencia, saldo) {
    num;
    cliente;
    dataAbertura;
    agencia;
    saldo;
  }
}


  const contas = []


  let conta = new Conta()
  conta.num = "123-4"
  conta.cliente = "Samuel"
  conta.dataAbertura = "04-08-2019"
  conta.agencia = "777-7"
  conta.saldo = 470

  contas[0] = conta

  conta = new Conta()
  conta.num = "456-7"
  conta.cliente = "Jefté"
  conta.dataAbertura = "15-12-2020"
  conta.agencia = "777-7"
  conta.saldo = 3200

  contas[1] = conta

  conta = new Conta()
  conta.num = "789-0"
  conta.cliente = "Luíza"
  conta.dataAbertura = "09-12-2021"
  conta.agencia = "777-7"
  conta.saldo = 6300

  contas[2] = conta

  function getSaldo() {
    let pesquisarSaldo = prompt("Informe o número da conta que deseja saber o saldo: ")
    let count = 0
    for (let i = 0; i < contas.length; i++) {
      count++
      if (contas[i].num == pesquisarSaldo) {
        document.write("O saldo da conta " + contas[i].num + " é R$" + contas[i].saldo + ".")
      }
      else {
        alert("Aguarde, estou procurando na próxima conta...")
      }
    }
  }
  
  let userInput = prompt("Deseja verificar o saldo de uma conta? (S/N)")

  if (userInput.toUpperCase() == "S") {
    getSaldo()
  }

  else {
    document.write("Obrigado por usar o sistema!")
  }
  


  

  

