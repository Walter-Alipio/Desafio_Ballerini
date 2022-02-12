const button = document.querySelector('[data-button]');

button.addEventListener('click',()=>{

    const view = new ViewCoins(document.querySelector('[data-answer]'));

    const troco = document.querySelector('#troco');
    if(troco.value === ""){
        return alert("Campo obrigatório!")
    }
    const theChange = new Coins(troco); 

    theChange.calc(theChange);//calcula a quantidade de moedas
    console.log(theChange)
    
    view.update(theChange); // atualiza os dados da tela

    troco.value="";
    troco.focus();
})