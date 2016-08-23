"use strict";

const Poll = require("../models/Poll");

const ValidationError = require("../config/errors").ValidationError;

module.exports.findAll = (req, res) => {
    Poll
        .findAll()
        .then(polls => {
            res.status(200).send(polls);
        })
        .catch(err => {
            res.status(500).send({
                location: "Poll findAll .catch other",
                message: "Getting all Polls caused an internal server error.",
                error: err,
            });
        });
};

module.exports.findOne = (req, res) => {
    Poll
        .findOne()
        .then(poll => {
            res.status(200).send(poll);
        })
        .catch(err => {
            res.status(500).send({
                location: "Poll findOne .catch other",
                message: "Getting a Poll caused and internal error",
                error: err,
            });
        });
};

module.exports.saveOne = (req, res) => {
    Poll
        .saveOne(req.body)
        .then(poll => {
            res.status(200).send(poll);
        })
        .catch(err => {
            res.status(500).send({
                location: "Poll saveOne .catch other",
                message: "Saving Poll caused an internal server error.",
                error: err,
            });
        });
};

module.exports.updateOne = (req, res) => {
    Poll
        .update(req.params.id, req.body)
        .then(poll => {
            res.status(200).send(poll);
        })
        .catch(err => {
            res.status(500).send({
                location: "Poll updateOne .catch other",
                message: "Updating Poll caused an internal server error.",
                error: err,
            });
        });
};

module.exports.deleteOne = (req, res) => {
    Poll
        .delete(req.params.id)
        .then(deletedRows => {
            if (deletedRows !== 0) {
                res.status(200).send({
                    location: "Poll deleteOne success",
                    message: "Deleting Poll " + req.params.id + " success",
                    error: {},
                });
            } else {
                res.status(404).send({
                    location: "Poll deleteOne deletedRows === 0",
                    message: "No Poll found",
                    error: {},
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                location: "Poll deleteOne .catch other",
                message: "Deleting User caused an internal server error.",
                error: err,
            });
        });
};
