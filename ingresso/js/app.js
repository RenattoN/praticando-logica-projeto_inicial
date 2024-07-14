    let ingressoPista = 100;
    let ingressoSuperior = 200;
    let ingressoInferior = 400;

function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    if(quantidade < 0 ||quantidade > 99 ){
        quantidade = 0;
    }else{
        if(tipoIngresso == 'pista'){
        
            ingressoPista = ingressoPista-quantidade;
    
            if(ingressoPista< 0){
            alert("Ingressos esgotados");
            ingressoPista=0;
    
            }else{
    
                let disponibilidadePista = document.getElementById('qtd-pista');
                disponibilidadePista.textContent =ingressoPista;
                alert('Compra realizada com sucesso!');
            }
    
            
    
        } else if(tipoIngresso == 'superior'){
    
            ingressoSuperior =ingressoSuperior-quantidade;
    
            if(ingressoSuperior< 0){
                alert("Ingressos esgotados");
                ingressoSuperior=0;
    
                }else{
    
                    let disponibilidadeSuperior = document.getElementById('qtd-superior');
                    disponibilidadeSuperior.textContent =ingressoSuperior;
                    alert('Compra realizada com sucesso!');
    
                }
    
        }else if(tipoIngresso == 'inferior'){
    
            ingressoInferior = ingressoInferior-quantidade;
    
            if(ingressoInferior< 0){
    
                alert("Ingressos esgotados");
                ingressoInferior= 0;
    
                }else{
                    
                let disponibilidadeInferior = document.getElementById('qtd-inferior');
                disponibilidadeInferior.textContent =ingressoInferior;
                    alert('Compra realizada com sucesso!');
    
                }
        }
    }



    
    
    
    


    
    document.getElementById('qtd').value = 0;
}