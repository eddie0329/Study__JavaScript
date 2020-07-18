let Person = function () {
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log('hi');
  }
};

const p1 = new Person();
p1.greet();
console.log(p1.canTalk);
