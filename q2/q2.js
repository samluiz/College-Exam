const lotes = ['X', 'X', , 'X', , 'X', , , 'X', 'X']


function validacaoLote() {
  for (let i = 0; i < lotes.length; i++) {
    if (typeof(lotes[i]) == 'undefined') {
      document.write("O lote " + (i + 1) + " está a venda!<br><br>")
    }
  
    else {
      document.write("O lote " + (i + 1) + " não está a venda.<br><br>")
    }
  }
}

let userInput = prompt("Deseja verificar os lotes disponíveis? (S/N)")

if (userInput.toUpperCase() == "S") {
  validacaoLote()
}

  else {
    document.write("Obrigado por usar o sistema!")
  }
