class User{
    constructor(name,age,skill){
        this._name = name;
        this._age = age;
        this._skill = skill;
        Object.freeze(this);
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get skill(){
        return this._skill;
    }

}