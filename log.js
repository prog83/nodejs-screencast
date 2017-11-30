var winston = require('winston');

module.exports = function (module) {
  return prepareWinston(module.filename);
}

function prepareWinston(path) {
  if (path.match(/server.js$/)) {
    var transports = [
      new winston.transports.Console({
        timestamp: true,
        colorize: true,
        level: 'info'
      }),
      new winston.transports.File({
        filename: 'debug.log',
        level: 'debug'
      })
    ];
    return new winston.Logger({transports: transports});
  }
  else {
    return new winston.Logger({transports: []});
  }
}

