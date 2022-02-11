class View{
    constructor(elemet){
        this._element = elemet;
    }

    template(){//recebe a lista para renderizar
        throw new Error('O método template deve ser implementado');
    }

    update(model){
        this._element.innerHTML = this.template(model);
    }
}