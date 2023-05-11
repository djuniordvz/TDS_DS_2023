const { Connection } = require("pg");
const connection = require("../connection");

module.exports = {
    find: () => {
        return connection.select().from("student");
    },

    findbyID: (id) => {
        return connection.select().from("student").where("id", "=", id);
    },

    post: (student) => {
        return connection.insert(student).into("student");
    },

    put: (student, id) => {
        return connection("student").update(student).where({id: id});
    },

    delete: (id) => {
        return connection("student").where({id: id}).del();
    },
    
};

connection.select()