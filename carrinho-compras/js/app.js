
function adicionar(){

    let produto = document.getElementById('produto').value;
    let valor = produto.split('$')[1];
    let nomeProduto = produto.split('-')[0];
    let listaProdutos = document.getElementById('lista-produtos');

    let quantidade = document.getElementById('quantidade').value;
    let subTotal = valor * quantidade;
    total = total + subTotal;
    
    listaProdutos.innerHTML =listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;
    
        let valorTotal = document.getElementById('valor-total');
        valorTotal.innerHTML =`<span class="texto-azul" id="valor-total">R$${total}</span>`;
    document.getElementById('quantidade').value = 0;
}
function limpar(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML='';
    document.getElementById('valor-total').textContent='R$ 0';
}
let total;
limpar();