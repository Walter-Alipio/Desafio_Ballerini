const button = document.querySelector('[data-button]');

button.addEventListener('click',()=>{
    console.log("fui clicado")
    const text = new Text(document.querySelector('#texto').value);
    console.log(text.countOfWords());
    console.log(text.countOfPhrases());

})