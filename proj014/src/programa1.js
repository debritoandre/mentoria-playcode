/*******************************************************************************
	Tarefa 1: (USE SWITCH CASE) 
		Crie uma função chamada calcularFrete que recebe a sigla do estado como 
		parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo 
		com a seguinte tabela de preços:
			MG     -> 12,50
			SP     -> 23,90
			RJ     -> 18,20
			Outros -> 35,90
*******************************************************************************/

function calcularFrete(estado){

switch (estado) {

	case 'MG':return 12.5; break;

	case 'SP':return 23.9; break;

	case 'RJ':return 18.2; break;

	default: return 35.9;

    } 
}


/*******************************************************************************
	Tarefa 2: (USE SWITCH CASE)
		Crie um função chamada nomeMes, que recebe um número referente ao mês e 
		retorna o nome do mês equivalente. 1 para Janeiro, 2 para Fevereiro, 3 para 
		março e assim por diante, até 12 para dezembro. Deve retornar a mensagem
		"Mês inválido" caso seja usado algum número que não esteja entre 1 e 12.
*******************************************************************************/

function nomeMes(mes) {

	switch (mes) {

		case 1 : return 'Janeiro'; break;
		case 2 : return 'Fevereiro'; break;
		case 3 : return 'março'; break;
		case 4 : return 'abril'; break;
		case 5 : return 'maio'; break;
		case 6 : return 'junho'; break;
		case 7 : return 'Julho'; break;
		case 8 : return 'agosto'; break;
		case 9 : return 'Setembro'; break;
		case 10 : return 'Outubro'; break;
		case 11 : return 'Novembro'; break;
		case 12 : return 'dezembro'; break;

		default: return 'Mês inválido';

	}
}


/*******************************************************************************
	Tarefa 3: (USE SWITCH CASE) 
		Crie uma função chamada tabelaPeriodica que recebe como parâmetro a sigla
		de um elemento químico e retorne o nome desse elemento. Para exemplificar, 
		passando a sigla Zn, vai retornar zinco e Pt vai retornar platina.
		Use essa referência para abranger todos os elementos:
		https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica#Estrutura_da_tabela_peri%C3%B3dica		
*******************************************************************************/

function tabelaPeriodica(sigla) {

	switch (sigla) {

		case 'Ac' : return 'Actínio'; break;
		case 'Ag' : return 'Prata'; break;
		case 'Al' : return 'Alumínio'; break;
		case 'Am' : return 'Amerício'; break;
		case 'Ar' : return 'Argônio'; break;
		case 'As' : return 'Arsénio'; break;
		case 'At' : return 'Ástato'; break;
		case 'Au' : return 'Ouro'; break;
		case 'B'  : return 'Boro'; break;
		case 'Ba' : return 'Bário'; break;
		case 'Be' : return 'Berílio'; break;
		case 'Bh' : return 'Bóhrio'; break;
		case 'Bi' : return 'Bismuto'; break;
		case 'Bk' : return 'Berquélio'; break;
		case 'Br' : return 'bromo'; break;
		case 'C'  : return 'Carbono'; break;
		case 'Ca' : return 'Cálcio'; break;
		case 'Cd' : return 'Cádmio'; break;
		case 'Ce' : return 'Cério'; break;
		case 'Cf' : return 'Califórnio'; break;
		case 'Cl' : return 'Cloro'; break;
		case 'Cm' : return 'Cúrio'; break;
		case 'Cn' : return 'Copernício'; break;
		case 'Co' : return 'Cobalto'; break;
		case 'Cr' : return 'Cromo'; break;
		case 'Cs' : return 'Césio'; break;
		case 'Cu' : return 'Cobre'; break;
		case 'Db' : return 'Dúbnio'; break;
		case 'Ds' : return 'Darmstácio'; break;
		case 'Dy' : return 'Disprósio'; break;
		case 'Er' : return 'Érbio'; break;
		case 'Es' : return 'Einsténio'; break;
		case 'Eu' : return 'Európio'; break;
		case 'F'  : return 'Flúor'; break;
		case 'Fe' : return 'Ferro'; break;
		case 'Fl' : return 'Fleróvio'; break;
		case 'Fm' : return 'Férmio'; break;
		case 'Fr' : return 'Frâncio'; break;
		case 'Ga' : return 'Gálio'; break;
		case 'Gd' : return 'Gadolínio'; break;
		case 'Ge' : return 'Germânio'; break;
		case 'H'  : return 'Hidrogênio'; break;
		case 'He' : return 'Hélio'; break;
		case 'Hf' : return 'Háfnio'; break;
		case 'Hg' : return 'Mercúrio'; break;
		case 'Ho' : return 'Hólmio'; break;
		case 'Hs' : return 'Hássio'; break;
		case 'I'  : return 'Iodo'; break;
		case 'In' : return 'Índio'; break;
		case 'Ir' : return 'Irídio'; break;
		case 'K'  : return 'Potássio'; break;
		case 'Kr' : return 'Criptônio'; break;
		case 'La' : return 'Lantânio'; break;
		case 'Li' : return 'Lítio'; break;
		case 'Lr' : return 'Laurêncio'; break;
		case 'Lu' : return 'Lutécio'; break;
		case 'Lv' : return 'Livermório'; break;
		case 'Mc' : return 'Moscóvio'; break;
		case 'Md' : return 'Mendelévio'; break;
		case 'Mg' : return 'Magnésio'; break;
		case 'Mn' : return 'Manganês'; break;
		case 'Mo' : return 'Molibdénio'; break;
		case 'Mt' : return 'Meitnério'; break;
		case 'N'  : return 'Nitrogênio'; break;
		case 'Na' : return 'Sódio'; break;
		case 'Nb' : return 'Nióbio'; break;
		case 'Nd' : return 'Neodímio'; break;
		case 'Ne' : return 'Neônio'; break;
		case 'Nh' : return 'Nipônio'; break;
		case 'Ni' : return 'Níquel'; break;
		case 'No' : return 'Nobélio'; break;
		case 'Np' : return 'Ne(p)túnio'; break;
		case 'O ' : return 'Oxigênio'; break;
		case 'Og' : return 'Oganésson'; break;
		case 'Os' : return 'Ósmio'; break;
		case 'P ' : return 'Fósforo'; break;
		case 'Pa' : return 'Protactínio'; break;
		case 'Pb' : return 'Chumbo'; break;
		case 'Pd' : return 'Paládio'; break;
		case 'Pm' : return 'Promécio'; break;
		case 'Po' : return 'Polônio'; break;
		case 'Pr' : return 'Praseodímio'; break;
		case 'Pt' : return 'platina'; break;
		case 'Pu' : return 'Plutônio'; break;
		case 'Ra' : return 'Rádio'; break;
		case 'Rb' : return 'Rubídio'; break;
		case 'Re' : return 'Rênio'; break;
		case 'Rf' : return 'Rutherfórdio'; break;
		case 'Rg' : return 'Roentgénio(Roentgênio)'; break;
		case 'Rh' : return 'Ródio'; break;
		case 'Rn' : return 'Rádon (Radônio)'; break;
		case 'Ru' : return 'Rutênio'; break;
		case 'S'  : return 'Enxofre'; break;
		case 'Sb' : return 'Antimônio'; break;
		case 'Sc' : return 'Escândio'; break;
		case 'Se' : return 'Selénio'; break;
		case 'Sg' : return 'Seabórgio'; break;
		case 'Si' : return 'Silício'; break;
		case 'Sm' : return 'Samário'; break;
		case 'Sn' : return 'estanho'; break;
		case 'Sr' : return 'Estrôncio'; break;
		case 'Ta' : return 'Tântalo(tantálio)'; break;
		case 'Tb' : return 'Térbio'; break;
		case 'Tc' : return 'Tecnécio'; break;
		case 'Te' : return 'Telúrio'; break;
		case 'Th' : return 'Tório'; break;
		case 'Ti' : return 'Titânio'; break;
		case 'Tl' : return 'Tálio'; break;
		case 'Tm' : return 'Túlio'; break;
		case 'Ts' : return 'Tenesso'; break;
		case 'U'  : return 'Urânio'; break;
		case 'V'  : return 'Vanádio'; break;
		case 'W'  : return 'Tungstênio'; break;
		case 'Xe' : return 'Xenônio'; break;
		case 'Y'  : return 'Ítrio'; break;
		case 'Yb' : return 'Itérbio'; break;
		case 'Zn' : return 'zinco'; break;
		case 'Zr' : return 'Zircônio'; break;

		default: return 'Sigla inválida';

		
	}
}




