"use strict";

const BaseModel = require("./BaseModel");

class Poll extends BaseModel {
  constructor() {
    super("Poll");
  }
}

module.exports = new Poll();