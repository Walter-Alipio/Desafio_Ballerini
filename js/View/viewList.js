class ViewList extends View{
    constructor(element){
        super(element);
    }

    template(list){//recebe a lista para renderizar
        return `
        <h2 class="texto titulo">Resultado</h2>
        ${list.userList.map((user)=>{
            return `           
            <ul class="list">
                <li><span class="list__atributo">Nome:</span> <span class="list__atributo-output">${user.name}</span></li>
                <li><span class="list__atributo">Idade:</span> <span class="list__atributo-output">${user.age}</span></li>
                <li><span class="list__atributo">Skills:</span> <span class="list__atributo-output">${user.skill}</span></li>
            </ul>
            `
        }).join('')}`
    }

    update(model){
        this._element.innerHTML = this.template(model);
    }

}