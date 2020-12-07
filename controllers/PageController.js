const Model = require("../models/index");

class PageController {

    find = async (req, res) => {
        return await Model.Pages.findAll()
        .then( pageResponse => {
            res.status(200).json({
                message: 'Success',
                data: pageResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    findOne = async (req, res) => {
        return await Model.Pages.findAll({
            where: {id: req.params.id },
        })
        .then( pageResponse => {
            res.status(200).json({
                message: 'Success',
                data: pageResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    create = async (req, res) => {
        return await Model.Pages.create({
            name: req.body.name,
            description: req.body.description,
            createdBy: 1,
            updatedBy:1,
        })
        .then( pageResponse => {
            res.status(200).json({
                message: 'Success',
                data: pageResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    update = async (req, res) => {
        return await Model.Pages.update(req.body, {
            where: {id: req.params.id }
        })
        .then( pageResponse => {
            res.status(200).json({
                message: 'Success',
                data: pageResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }

    destroy = async (req, res) => {
        return await Model.Pages.destroy({
            where: {id: req.params.id }
        })
        .then( pageResponse => {
            res.status(200).json({
                message: 'Success',
                data: pageResponse
            });
        })
        .catch( error => {
            res.status(400).send(error);
        })
    }
}
module.exports = new PageController;