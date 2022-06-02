//variaveis placar
var ptsUsu = 0;
var ptsMqn = 0;
var ptsUsuSpan = document.getElementById('usua');
var ptsMqnSpan = document.getElementById('maqn');
var placar = document.querySelector('.placar');
var resultado = document.querySelector('.resultado > p');

//variaveis de escolha
var pedra = document.getElementById('Pedra');
var papel = document.getElementById('Papel');
var tesoura = document.getElementById('Tesoura');

//function para gerar escolha maquina
function escolhaMaq () {
	var escolhas = ['Pedra', 'Papel', 'Tesoura']
	var numMaq = (Math.floor(Math.random()* 3));
	return escolhas[numMaq];
}

//function para caso ganhe perca ou empate
function ganhou(escolhaUsu, escolhaMaqn){
	ptsUsu++
	ptsUsuSpan.innerHTML = ptsUsu;
	ptsMqnSpan.innerHTML = ptsMqn;
	resultado.innerHTML = `Você escolheu ${escolhaUsu}. A máquina escolheu ${escolhaMaqn}. Parabéns, você ganhou!! 🥳`
}

function perdeu(escolhaUsu, escolhaMaqn){
	ptsMqn++
	ptsMqnSpan.innerHTML = ptsMqn;
	ptsUsuSpan.innerHTML = ptsUsu;
	resultado.innerHTML = `A máquina escolheu ${escolhaMaqn}. Você escolheu ${escolhaUsu}. Você perdeu!! 😕`
}

function empatou(escolhaUsu, escolhaMaqn){
	ptsMqnSpan.innerHTML = ptsMqn;
	ptsUsuSpan.innerHTML = ptsUsu;
	resultado.innerHTML = `Você escolheu ${escolhaUsu}. A também máquina escolheu ${escolhaMaqn}. O jogo empatou. 😑`
}

//function para entrada de dados do usuario
function jogo (escolhaUsu) {
	var escolhaMaqn = escolhaMaq()
	switch (escolhaUsu + escolhaMaqn) {
		case 'PedraTesoura':
		case 'PapelPedra':
		case 'TesouraPapel':
			ganhou(escolhaUsu, escolhaMaqn);
			break;
		case 'TesouraPedra':
		case 'PedraPapel':
		case 'PapelTesoura':
			perdeu(escolhaUsu, escolhaMaqn);
			break;
		case 'TesouraTesoura':
		case 'PedraPedra':
		case 'PapelPapel':
			empatou(escolhaUsu, escolhaMaqn);
			break;
	}

}

function princi(){
	pedra.addEventListener('click', function(){
		jogo("Pedra");
	})

	papel.addEventListener('click', function(){
		jogo("Papel");
	})

	tesoura.addEventListener('click', function(){
		jogo("Tesoura");
	})
}
princi()

// --------------------------------- ultima atualização 09/05/2022   ----    05:59
// --------------------------------- Rafael GK