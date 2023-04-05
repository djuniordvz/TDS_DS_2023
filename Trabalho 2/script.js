function calcular() {
	var distancia = document.getElementById("distancia").value;
	var consumo = document.getElementById("consumo").value;
	var preco = document.getElementById("preco").value;
	var resultado = (distancia / consumo) * preco;
	document.getElementById("resultado").value = "R$ " + resultado.toFixed(2);
}
