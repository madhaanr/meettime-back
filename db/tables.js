"use strict";

const Sequelize = require("sequelize");
const seq = require("../db/db_connection").sequelize;

const User = seq.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  passwordHash: Sequelize.STRING,
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  role: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
});

const Item = seq.define("Item", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  authorFirstname:
  {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  authorLastname:
  {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  authorEmail: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
});


module.exports.Models = {
  User,
  Item,
};
