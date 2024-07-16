
let listaNomes = [];

function adicionar(){

        let nomeAmigo = document.getElementById('nome-amigo');
        let lista = document.getElementById('lista-amigos');
        
        incluirLista(nomeAmigo.value,lista);
        nomeAmigo.value ='';

}

function sortear(){
    
    if(listaNomes.length>3){

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
    } else{
        ( listaNomes.length == 1 ) ? alert(`Insira pelo menos 4 amigos! atualmente existe ${listaNomes.length} nome.`) : alert(`Insira pelo menos 4 amigos! atualmente existem ${listaNomes.length} nomes.`);
    }
        
    

}         

function reiniciar(){

        listaNomes = '';
        document.getElementById('lista-amigos').innerHTML='';
        document.getElementById('lista-sorteio').innerHTML = '';

}

function incluirLista(nome,lista){

        if(nome == ''){

            alert('informe o nome do amigo!');
            return;

        }
        if(listaNomes.includes(nome)){

            alert('Este nome já foi incluido na lista!');
            return;
        }

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


