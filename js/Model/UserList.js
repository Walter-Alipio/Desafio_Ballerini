class UserList{
    constructor(){
        this._userList = [];
    }
    addUser(user){
        this._userList.push(user);
    }

    get userList(){
        return [].concat(this._userList);
    }
}