let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let imparsDobro = []

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 != 0) {
    imparsDobro[i] = numbers[i] * 2
  }
}

for (let i = 0; i < imparsDobro.length; i++) {
  document.write(imparsDobro[i] + "<br>")
}