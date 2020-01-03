// Pegar as listas de pessoas
var $list = document.querySelectorAll('.uiList');

// Variável para armazenar os aniversários
var aniversarios = [];

// Passando por todas as litas
$list.forEach(ul => {
	var lis = ul.querySelectorAll('li a');

	// passando por cada pessoa encontrada em cada lista
	lis.forEach(as => {
			var niver = as.getAttribute('data-tooltip-content');
			var niverInfo = niver ? niver.split('(') : '';

			// Criando um objeto com as informações separadas
			/*
				* TODO:
				* Rever o split para separar melhor essas informações
			*/
			aniversarios.push({
					nome: niverInfo[0],
					data: niverInfo[1]
			});
	});
});

// Criar um box no DOM
/*
	* TODO:
	* Criar box via JS
	* Criar um <textarea>
	* Usar a função 'copy' do browser ex: document.execCommand("copy");
*/
var box = document.querySelector('#douglas');

// Depois de criar o Box, printar todo o resultado para poder copiar
aniversarios.map(niv => box.textContent += JSON.stringify(niv));
