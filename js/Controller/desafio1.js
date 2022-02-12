

const button = document.querySelector('[data-button]');
const userList = new UserList();
const view = new ViewList(document.querySelector('[data-answer]'));

button.addEventListener('click',()=>{

    const name = document.querySelector('#name');
    const age = document.querySelector('#age');
    const language = document.querySelector('#language');
    if(name.value === "" || age.value === "" || language.value === ""){
        return alert("Preencha todos os campos!");
    }
    
    const user = new User(name.value,age.value,language.value);
    console.log(user);
    
 
    userList.addUser(user);
    console.log(userList)
    
   

    view.update(userList);

    // const text = document.querySelector('[data-answer]');

    // text.innerHTML = answer(name,age,language);
    clean(name,age,language)
});

// function answer(name,age,language){
//     return `<p class="texto">Olá ${name.value}, você tem ${age.value} e já está aprendento ${language.value}</p>`
// }

//função para limpar a tela
function clean(name,age,language){
    return name.value='', age.value='', language.value='', name.focus();
}