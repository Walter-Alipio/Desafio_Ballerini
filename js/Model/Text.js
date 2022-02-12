class Text{
    constructor(text){
        this._text = text;
    }

    countOfCharacter(){
        return this._text.length;
    }
    countOfWords(){
        const numberOfWords = [...this._text.split(" " ||",")];
        return numberOfWords.length;
    }
    countOfPhrases(){
        const phrase = [...this._text.split("."||"?"||"!"||";")]
        return phrase.length - 1;
    }

}