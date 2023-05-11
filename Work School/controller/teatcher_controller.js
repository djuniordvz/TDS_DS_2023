const teatcherRepository = require("../repository/teatcher_repository");

module.exports = {
    FunctionGetAll: (req, resp) => {
        teatcherRepository
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

        teatcherRepository
            .findbyID(id)
            .then((result) => {
            resp.send(result);
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionPost: (req, resp) => {
        const teatcher = req.body;
        teatcherRepository
            .post(teatcher)
            .then((result) => {
            resp.send({msg: "Teatcher sucessfuly inserted!",result});
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionPut: (req, resp) => {
        const teatcher = req.body;
        const {id} = req.params;
        if (!id){
            resp.status(404).send({ msg : "Type a ID!"});
        }

        teatcherRepository
            .put(teatcher, id)
            .then(() => {
            resp.send({ msg: "Teatcher sucessfuly updated!", teatcher});
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
        teatcherRepository
            .delete(id)
            .then(() => {
            resp.send({msg: "Teatcher sucessfuly deleted!"});
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },
}