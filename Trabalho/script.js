const calcularButton = document.getElementById('calcular');
calcularButton.addEventListener('click', calcularCusto);
calcularButton.addEventListener('click', calcularCusto);

function calcularCusto() {
  const consumo = parseFloat(document.getElementById('consumo').value);
  const distancia = parseFloat(document.getElementById('distancia').value);
  const combustivel = parseFloat(document.getElementById('combustivel').value);

  const custoTotal = (distancia / consumo) * combustivel;
  
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.style.display = 'block';
  resultadoDiv.innerHTML = `<h2>Resultado:</h2><p>O custo total da viagem será de R$ ${custoTotal.toFixed(2)}.</p>`;
}

