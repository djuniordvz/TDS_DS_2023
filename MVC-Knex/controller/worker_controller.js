const workerRepository = require("../repository/worker_repository");

module.exports = {
    FunctionGetAll: (req, resp) => {
        workerRepository
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

        workerRepository
            .findbyID(id)
            .then((result) => {
            resp.send(result);
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionPost: (req, resp) => {
        const worker = req.body;
        workerRepository
            .post(worker)
            .then((result) => {
            resp.send({msg: "Worker sucessfuly inserted!",result});
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionPut: (req, resp) => {
        const worker = req.body;
        const {id} = req.params;
        if (!id){
            resp.status(404).send({ msg : "Type a ID!"});
        }

        workerRepository
            .put(worker, id)
            .then(() => {
            resp.send({ msg: "Worker sucessfuly updated!", worker});
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
        workerRepository
            .delete(id)
            .then(() => {
            resp.send({msg: "Worker sucessfuly deleted!", worker});
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionFindDependents: (req, resp) => {
        workerRepository
            .findDependents()
            .then((data) => {
            resp.send(data);
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionFindDependentsFunc: (req, resp) => {
        const {id} = req.params;
        workerRepository
            .findDependentsFunc(id)
            .then((data) => {
            resp.send(data);
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },
}