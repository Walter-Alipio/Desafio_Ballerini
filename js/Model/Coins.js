class Coins {

  constructor(theChange) {
    this._theChange = theChange.value;
    this._realCoin = 0;
    this._coin50  = 0;
    this._coin25 = 0;
    this._coin10 = 0;
    this._coin5 = 0;
    this._coin1 = 0;
    this._newChange = 0;
  }

  _calc(theChange) {

    console.log(theChange)
    for (let i = theChange._theChange; i >= 1; i--) {
        theChange._realCoin++;
    }

    theChange._newChange = theChange._theChange - theChange._realCoin;
    theChange._newChange = theChange._newChange.toFixed(2);
    console.log(theChange._newChange);

    if (theChange._newChange >= 0.5) {
        theChange._newChange -= 0.5;
        theChange._coin50++;
    }

    if (theChange._newChange >= 0.25) {
        theChange._newChange -= 0.25;
        theChange._coin25++;
    }

    for (let i = theChange._newChange; i >= 0.1; i -= 0.1) {
        theChange._newChange -= 0.1;
        theChange._coin10++;
    }

    if (theChange._newChange >= 0.05) {
        theChange._newChange -= 0.05;
        theChange._coin5++;
    }

    for (let i = theChange._newChange; i > 0; i -= 0.01) {
        theChange._newChange -= i;
        theChange._coin1++;
    }

    //return theChange._realCoin, theChange._coin50, theChange._coin25, theChange._coin10, theChange._coin5, theChange._coin1;
  }
  
  calc(theChange){
      return this._calc(theChange)
  }

  get realCoin(){ return this._realCoin};
  get coin50(){ return this._coin50 };
  get coin25(){return this._coin25};
  get coin10(){return this._coin10};
  get coin5(){return this._coin5};
  get coin1(){return this._coin1};
}
