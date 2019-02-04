function conta() {
	var dnum1 = document.getElementById('dnum1').value;
	var dnum2 = document.getElementById('dnum2').value;
	var sinal = document.getElementById('dop').value;
	var resultado;

	if (sinal == '+') {
		resultado = parseInt(dnum1) + parseInt(dnum2);
	}
	if (sinal == '-') {
		resultado = parseInt(dnum1) - parseInt(dnum2);
	}
	if (sinal == '*') {
		resultado = parseInt(dnum1) * parseInt(dnum2);
	}
	if (sinal == '/') {
		resultado = parseInt(dnum1) / parseInt(dnum2);
	}

	document.getElementById('resultado').innerHTML = resultado;

}
