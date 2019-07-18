/*******************************************************************************
	Tarefakutekute
	1:
		Crie uma função chamada numerosAte20 que deve retornar todos os números
		de 0 a 20 devidamente separados por espaço.
		Exemplo: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
	
*******************************************************************************/

function numerosAte20() {

	let resposta1 = ' ';
	let i;

	for (i = 0; i < 21; i++) {

		resposta1 = resposta1 + i + ' ';
	}

	return resposta1;
}

/*******************************************************************************
	Tarefa 2:
		Crie uma função chamada numerosImpares, que recebe um parâmetro chamado
		limite. Essa função deve retornar todos os números ímpares devidamente sepa-
		rados por espaço até o limite definido pelo valor passado no parâmetro.
		Exemplo: numerosImpares(9) deve retornar 1 3 5 7 9
*******************************************************************************/

function numerosImpares(limite) {

	let resposta2 = ' ';
	let i;

	for (i = 0; i <= limite; i++) {

		if ( i % 2 == 1) {

			resposta2 = resposta2 + i + ' ';
		 
		}

	}

	return resposta2;
}

/*******************************************************************************
	Tarefa 3:
		Crie uma função chamada contagemRegressiva. Essa função vai retornar todos
		os números em ordem regressiva de 100 a 0, devidamente separados por espaço.
		Exemplo: 100 99 98 97 96 95 94 93 92 91 90 89 .. 7 6 5 4 3 2 1 0
*******************************************************************************/

function contagemRegressiva() {

	let resposta3 = ' ';
	let i;

	for (i = 100; i >= 0; i--) {

		resposta3 = resposta3 + i + ' ';
	}

	return resposta3;
}