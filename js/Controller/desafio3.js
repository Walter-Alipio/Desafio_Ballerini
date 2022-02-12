const button = document.querySelector('[data-button]');

button.addEventListener('click',()=>{
    console.log("fui clicado")
    const textValue = document.querySelector('#texto').value

    if(textValue === ""){
        return alert("Campo obrigatório!")
    }

    const text = new Text(textValue);


    const view = new ViewText(document.querySelector('[data-answer]'));
    view.update(text);

    console.log(text)
})