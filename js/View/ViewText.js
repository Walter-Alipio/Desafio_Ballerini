class ViewText extends View{
    constructor(element){
        super(element);
    }

    template(text){//recebe a lista para renderizar
        return `
        <h2 class="texto titulo">Resultado</h2>        
            <ul class="list">
                <li><span class="list__atributo">Characteres:</span> <span class="list__atributo-output">${text.countOfCharacter()}</span></li>
                <li><span class="list__atributo">Palavras:</span> <span class="list__atributo-output">${text.countOfWords()}</span></li>
                <li><span class="list__atributo">Frases:</span> <span class="list__atributo-output">${text.countOfPhrases()}</span></li>
            </ul>
            `
    }
}