function pulaLinha() {
  document.write('<br><br>')
}
function mostra(frase) {
  document.write(frase)
  pulaLinha()
}
function calculaImc(altura, peso) {
  return peso / (altura * altura)
}

var nome = prompt('Informe o seu nome')
var alturaInformada = prompt(nome + ', informe sua altura')
var pesoInformado = prompt(nome + ' informe seu peso')
var imc = calculaImc(alturaInformada, pesoInformado)
document.write(nome + ' , o seu IMC calculado é ' + imc)
