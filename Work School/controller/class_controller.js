const classRepository = require("../repository/class_repository");

module.exports = {
    FunctionGetAll: (req, resp) => {
        classRepository
            .find()
            .then((result) => {
            resp.send(result);
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionGetByID: (req, resp) => {
        const {id} = req.params
        if (!id){
            resp.status(404).send({ msg : "Type a ID!"});
        }

        classRepository
            .findbyID(id)
            .then((result) => {
            resp.send(result);
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionPost: (req, resp) => {
        const classvar = req.body;
        classRepository
            .post(classvar)
            .then((result) => {
            resp.send({msg: "Class sucessfuly inserted!",result});
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionPut: (req, resp) => {
        const classvar = req.body;
        const {id} = req.params;
        if (!id){
            resp.status(404).send({ msg : "Type a ID!"});
        }

        classRepository
            .put(classvar, id)
            .then(() => {
            resp.send({ msg: "Class sucessfuly updated!", classvar});
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionDelete: (req, resp) => {
        const {id} = req.params
        if (!id){
            resp.status(404).send({ msg : "Type a ID!"});
        }
        classRepository
            .delete(id)
            .then(() => {
            resp.send({msg: "Class sucessfuly deleted!"});
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionGetAllClass: (req, resp) => {
        classRepository
            .allclass()
            .then((result) => {
            resp.send(result);
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionJoinByID: (req, resp) => {
        const {id} = req.params
        if (!id){
            resp.status(404).send({ msg : "Type a ID!"});
        }
        classRepository
            .joinbyID(id)
            .then((result) => {
            resp.send(result);
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },
}