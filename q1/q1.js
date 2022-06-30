let x = parseInt(prompt("Informe um número:"))
let xDez = x * 0.10
let num = []
let numMaior = []
let numMenor = []
let numIgual = []

for (let i = 0; i < 8; i++) {
  num[i] = parseInt(prompt("Insira um número: "))

}

for (let i = 0; i < num.length; i++) {
  if (num[i] > xDez) {
    numMaior[i] = num[i]
  }

  else if (num[i] == xDez) { 
    numIgual[i] = num[i]
  }

  else {
    numMenor[i] = num[i]
  }
}

document.write("Números maiores que 10% de " + x + ": " + numMaior.length + "<br>Números iguais a 10% de " + x + ": " + numIgual.length + "<br>Números menores que 10% de " + x + ": " + numMenor.length)

console.log(num)
console.log(numMaior)
console.log(numMenor)
console.log(numIgual)