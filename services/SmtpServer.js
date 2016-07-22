"use strict";

const SMTPServer = require('smtp-server').SMTPServer;

class SmtpServer {
  constructor() {
  }

  start() {
    const server = new SMTPServer({
        secure: false,
    });
    server.listen(4650);
  }
}

module.exports = new SmtpServer();
