
let listaNomes = [];

function adicionar(){
let nome = document.getElementById('nome-amigo');

let lista = document.getElementById('lista-amigos');
incluirLista(nome.value,lista);
nome.value ='';

}
function sortear(){
    embaralhar(listaNomes);
    
    let sortear = document.getElementById('lista-sorteio');
    for(let i=0;i<listaNomes.length;i++){
        if(i == listaNomes.length -1 ){
            sortear.innerHTML = sortear.innerHTML + listaNomes[i] + '-->' + listaNomes[0] + '<br>';
        }
        else{
        sortear.innerHTML = sortear.innerHTML + listaNomes[i] + '-->' + listaNomes[i + 1] + '<br>'; 
        }
    }
    console.log(listaNomes);
}      
    

function reiniciar(){
listaNomes = '';
document.getElementById('lista-amigos').innerHTML='';
document.getElementById('lista-sorteio').innerHTML = '';

}
function incluirLista(nome,lista){

    listaNomes.push(nome);
    if(lista.textContent == ''){
        lista.textContent= nome;
        
    }else{
        lista.textContent=lista.textContent+ ', '+ nome;
    }
    
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


