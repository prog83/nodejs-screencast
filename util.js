var util = require('util');

//---
var obj = {
  a: 5,
  b: 6,
  inspect: () => {
    return 123;
  }
}
obj.self = obj;

console.log('log: ', obj);

console.log('inspect: ', util.inspect(obj));

//---
var str = util.format('%s %d %j', 'string', 123, {obj: '1'});

console.log('format: ', str);

//---
function Animal(name) {
  this.name = name;  
}

Animal.prototype.walk = function () {
  console.log('Walk ' + this.name);
}

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.jump = function () {
  console.log('Jump ' + this.name);
}

util.inherits(Rabbit, Animal);

var rabbit = new Rabbit('Our rabbit');

rabbit.walk();
rabbit.jump();

