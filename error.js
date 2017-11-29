var util = require('util');

var phrases = {
  'Hello': 'Привет',
  'world': 'мир'
};

function PhrasesError(message) {
  this.message = message;
  Error.captureStackTrace(this, PhrasesError);
}
util.inherits(PhrasesError, Error);
PhrasesError.prototype.name = 'PhrasesError';

function HttpError(status, message) {
  this.status = status;
  this.message = message;
  Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrases(name) {
  if (!phrases[name]) {
    throw new PhrasesError(name + ' not found');
  }
  return phrases[name];
}

function makePage(url) {
  if (url !== 'index.html') {
    throw new HttpError(404, url + ' not found');
  }
  return util.format('%s %s', getPhrases('Hell'), getPhrases('world'));
}

try {
  var page = makePage('index.html');
  console.log(page);
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  }
  else {
    console.error('Error: %s\nMessage: %s\nStack: %s', e.name, e.message, e.stack);
  }
}
