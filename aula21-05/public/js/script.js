let cep =  document.getElementById('cep');
cep.addEventListener('input', function(event) {
    const cepBusca = event.target.value
    if (cepBusca.length < 8 || cepBusca.length > 8) {
      console.log('cep Invalido')
      limparDados();
    }else{
        preencherDados(cep.value);
    }
})

function preencherDados(cep){
    fetch(` https://brasilapi.com.br/api/cep/v2/${cep}`)
    .then(response =>{
        if(!response.ok){
            alert('CEP Inválido');
            throw new Error('Erro ao carregar os dados');
            limparDados();
        }
        return response.json();
    })
    .then(data=>{
        document.getElementById('cidade').value = data.city;
        document.getElementById('estado').value = data.state;
        document.getElementById('rua').value = data.street;
    })

}

function limparDados(){
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value ='';
    document.getElementById('rua').value = '';
}

