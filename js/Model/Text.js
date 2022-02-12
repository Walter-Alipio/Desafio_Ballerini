class Text{
    constructor(text){
        this._text = text;
    }

    countOfCharacter(){
        //const characters = [...this._text.split(" ")].join('');
        return this._text.length;
    }
    countOfWords(){
        const numberOfWords = [...this._text.split(/[\s,]+/)];//expressão reculagar que retira "," e " "
        return numberOfWords.length - 1;
    }
    countOfPhrases(){
        const phrase = [...this._text.split(/[.!;:?]/g)]//expressao regular para reconhecer a puntuação
        return phrase.length - 1;
    }

}