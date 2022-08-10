function clicar(){
    let squads = document.getElementById('squads');
    let squadsResposta = squads.value;
    let resultado = document.getElementById('resultado');
    if(squadsResposta == 'folha'){
        resultado.innerHTML = 'Horário: manhã'
    } else if(squadsResposta == 'raízes'){
        resultado.innerHTML = 'Horário: tarde'
    } else if(squadsResposta == 'água'){
        resultado.innerHTML = 'Horário: noite'
    } else {
        alert('Digite o nome de um squad')
    }
}
