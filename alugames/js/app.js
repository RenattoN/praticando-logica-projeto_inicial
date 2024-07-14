    // <a onclick="alterarStatus(1)" href="#" class="dashboard__item__button">Alugar</a>
   function alterarStatus(id) {

    //<li class="dashboard__items__item" id="game-1">
    let gameClicado = document.getElementById(`game-${id}`);
<   //<div class="dashboard__item__img"> que .dashboard__items__item esta no css
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    //<a onclick="alterarStatus(1)" href="#" class="dashboard__item__button">Alugar</a> que .dashboard__items__button esta no css
    let botao = gameClicado.querySelector('.dashboard__item__button');
    //<p class="dashboard__item__name">Monopoly</p>
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
