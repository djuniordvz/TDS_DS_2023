const studentRepository = require("../repository/student_repository");

module.exports = {
    FunctionGetAll: (req, resp) => {
        studentRepository
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

        studentRepository
            .findbyID(id)
            .then((result) => {
            resp.send(result);
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionPost: (req, resp) => {
        const student = req.body;
        studentRepository
            .post(student)
            .then((result) => {
            resp.send({msg: "Student sucessfuly inserted!",result});
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },

    FunctionPut: (req, resp) => {
        const student = req.body;
        const {id} = req.params;
        if (!id){
            resp.status(404).send({ msg : "Type a ID!"});
        }

        studentRepository
            .put(student, id)
            .then(() => {
            resp.send({ msg: "Student sucessfuly updated!", student});
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
        studentRepository
            .delete(id)
            .then(() => {
            resp.send({msg: "Student sucessfuly deleted!"});
        })
        .catch((error) => {
            resp.status(500).send(error)
        })
    },
}