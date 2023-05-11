const connection = require("../connection");

module.exports = {
    find: () => {
        return connection.select().from("class");
    },

    findbyID: (id) => {
        return connection.select().from("class").where("id", "=", id);
    },

    post: (classvar) => {
        return connection.insert(classvar).into("class");
    },

    put: (classvar, id) => {
        return connection("class").update(classvar).where({id: id});
    },

    delete: (id) => {
        return connection("class").where({id: id}).del();
    },

    allclass: () => {
        return connection.select("c.id as class_id", "c.nro_sala", "s.nome as student_nome", "t.nome as teatcher_name")
        .from("class as c")
        .innerJoin("student as s", "s.id", "=", "c.aluno_id")
        .innerJoin("teatcher as t", "t.id", "=", "c.professor_id");
    },
    
    joinbyID: (id) => {
        return connection.select("c.id as class_id", "c.nro_sala", "s.nome as student_nome", "t.nome as teatcher_name")
        .from("class as c")
        .innerJoin("student as s", "s.id", "=", "c.aluno_id")
        .innerJoin("teatcher as t", "t.id", "=", "c.professor_id")
        .where("c.id", "=", id);
    },
};

connection.select()