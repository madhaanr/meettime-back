"use strict";

const BaseModel = require("./BaseModel");

class SelectedTimes extends BaseModel {
  constructor() {
    super("SelectedTimes");
  }
}

module.exports = new SelectedTimes();
