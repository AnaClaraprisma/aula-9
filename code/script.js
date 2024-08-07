const formulario = document.querySelector("#formulario");
const resultadoTexto = document.querySelector("#resultadoTexto");

function calculoImc(altura, peso) {
  return peso / (altura * altura);
}

formulario.onsubmit = (event) => {
  event.preventDefault();

  const altura = parseFloat(document.querySelector("#altura").value);
  const peso = parseFloat(document.querySelector("#peso").value);
  const imc = calculoImc(altura, peso)
  // Faça condicionais verificando os dados fornecidos

  // Verificar se os dados inseridos são válidos

  // Se está abaixo do peso
  // Se está com o peso ideal
  // Se está acima do peso
  if (imc >= 18.5 && imc < 25) {
    resultadoTexto.textContent = `seu imc é: ${imc.toFixed(2)}. Você está no seu peso ideal!`
  }
  else if (imc >= 25 && imc < 30) {
    resultadoTexto.textContent = `seu imc é: ${imc.toFixed(2)}. Você está acima do ideal!`
  }
  else if (imc >=30 && imc <35) {
    resultadoTexto.textContent = `seu imc é: ${imc.toFixed(2)}. Você está obeso classe I!`
  }
  else if (imc >= 35 && imc < 40) {
    resultadoTexto.textContent = `seu imc é: ${imc.toFixed(2)}. Você está obeso classe II!`
  }
  else if (imc > 40) {

    resultadoTexto.textContent = `seu imc é: ${imc.toFixed(2)}. Você está classe III!`
  }
}