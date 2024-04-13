/*
    Objetivo 1 - quando o usuário clicar no botão de MOSTRAR MAIS, deve abrir os projetos que estao escondids no HTML
        Passo 1 - pegar o botão MOSTRAR MAIS no JS para poder verificar quando o usuário clicar em cima dele
        Passo 2 - identificar o clique no botão
        Passo 3 - adicionar a CLASSE ATIVO nos projetos escondidos
    Objetivo 2 - esconder o botão de MOSTRAR MAIS
        Passo 1 - pegar o botão e esconder ele
*/
    //Objetivo 1
    //Passo 1
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)');

    //Passo 2
botaoMostrarProjetos.addEventListener('click', () => {
    
    mostrarMaisProjetos();      //refatoração dentro do EventListener
    esconderBotao();            //refatoração dentro do EventListener
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosinativos.forEach(projetoinativo => {
        projetoinativo.classList.add('ativo');
    });
}
