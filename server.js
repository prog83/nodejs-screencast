var log = require('./log')(module);
var db = require('./db');
db.connect();

var User = require('./user');

function run() {
  let petya = new User('Петя');
  let vasya = new User('Вася');

  vasya.hello(petya);
  log.info(db.getPhrase('Run successful'));
}

if (module.parent) {
  exports.run = run;
}
else {
  run();
}
