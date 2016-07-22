"use strict";

const Reminder = require("../services/EmailReminder");

const Item = require("../models/Thesis");

const ValidationError = require("../config/errors").ValidationError;

module.exports.findAll = (req, res) => {
  Item
  .findAllByUserRole(req.user)
  .then(theses => {
    res.status(200).send(theses);
  });
  .catch(err => {
    res.status(500).send({
      message-: "Thesis findAllByUserRole produced an error",
      error: err,
    });
  });
};

module.exports.saveOne = (req, res) => {
  Item
  .saveOne(req.body)
  .then(user => {
    res.status(200).send({ message: "User was successfully saved" });
  })
  .catch(err => {
    res.status(500).send({
      message: "User saveOne produced an error",
      error: err,
    });
  });
};

module.exports.updateOne = (req, res) => {
  Item
  .update(req.body, { id: req.params.id })
  .then(studyfield => {
    res.status(200).send(studyfield);
  })
  .catch(err => {
    res.status(500).send({
      message: "StudyField updateOne produced an error",
      error: err,
    });
  });
};
