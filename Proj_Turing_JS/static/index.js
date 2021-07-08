// Definir as constantes
const pessoa = {
    nome: 'Alan', sobrenome: 'Turing', idade: 28, status: true, imagem_serio: '/static/antes.jpg',
    imagem_doido: '/static/depois.jpg'
} // Capturar os elementos pelo ID 
const elementoNome = document.getElementById("nome");
const elementoSobrenome = document.getElementById("sobrenome");
const elementoIdade = document.getElementById("idade");
const elementoBotao = document.getElementById("alteraStatus"); // Atribuir os valores iniciais 
elementoNome.innerText = pessoa.nome;
elementoSobrenome.innerText = pessoa.sobrenome;
elementoIdade.innerText = pessoa.idade;

// Definição da função de atualização do status
function atualiza() {
    pessoa.status = !pessoa.status;
    const elementoImagem = document.getElementById("imagem");
    const elementoStatus = document.getElementById("bloco_status");
    if (pessoa.status) {
        elementoImagem.src = pessoa.imagem_doido;
        elementoStatus.innerHTML = pessoa.nome + ' está <b>Feliz por ter Desencripitado</b>!';
    } else {
        elementoImagem.src = pessoa.imagem_serio;
        elementoStatus.innerHTML = pessoa.nome + ' está <b>SÉRIO e Pensando em como resolver</b>!';
    }
} atualiza(); // Adicionar o EventListener de clique no botão 
elementoBotao.addEventListener('click', atualiza);