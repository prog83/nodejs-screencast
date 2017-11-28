var log = require('./logger')(module);
var db = require('./db');
db.connect();

var User = require('./user');

function run() {
  let petya = new User('Петя');
  let vasya = new User('Вася');

  vasya.hello(petya);
  log(db.getPhrase('Run successful'));
}

if (module.parent) {
  exports.run = run;
}
else {
  run();
}
