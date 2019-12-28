var hero = {
  _name = 'eddie',
  getSecurity: function () {
    return this._name;
  }
};

var stole = hero.getSecurity;

console.log(hero.getSecurity());
console.log(stole.getSecurity());