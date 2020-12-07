const Model = require("../models/index");
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserController {

    find = async (req, res) => {
        return await Model.User.findAll()

        .then( userResponse => {
            res.status(200).json({
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    findOne = async (req, res) => {
        return await Model.User.findAll({
            where: {id: req.params.id },
        })
        .then( userResponse => {
            res.status(200).json({
                message: 'Success',
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    create = async (req, res) => {
        return await Model.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role_id: req.body.role,
            createdBy: 1,
            updatedBy:1,
        })
        .then( userResponse => {
            res.status(200).json({
                message: 'Success',
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    update = async (req, res) => {
        return await Model.User.update(req.body, {
            where: {id: req.params.id }
        })
        .then( userResponse => {
            res.status(200).json({
                message: 'Success',
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    destroy = async (req, res) => {
        return await Model.User.destroy({
            where: {id: req.params.id }
        })
        .then( userResponse => {
            res.status(200).json({
                message: 'Success',
                data: userResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }
}
module.exports = new UserController;