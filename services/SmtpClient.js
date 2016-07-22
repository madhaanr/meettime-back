"use strict";

const SMTPConnection = require('smtp-connection');

class SmtpClient {
  constructor() {
    this.connection = new SMTPConnection({
      // port: 2525,
      port: 25,
      host: "localhost",
      secure: false,
    });
    this.connection.connect((err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Success!")
      }
    })
  }

  send() {
    const envelope = {
      from: "teemu@haraka-test.org",
      to: "pekka@haraka-test.org",
    }
    const message = "Hi. This is a test message.";
    const callback = (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Message sent!")
      }
    }
    this.connection.send(envelope, message, callback);
  }
}

module.exports = new SmtpClient();
