const connection = require("../connection");

module.exports = {
    find: () => {
        return connection.select().from("teatcher");
    },

    findbyID: (id) => {
        return connection.select().from("teatcher").where("id", "=", id);
    },

    post: (teatcher) => {
        return connection.insert(teatcher).into("teatcher");
    },

    put: (teatcher, id) => {
        return connection("teatcher").update(teatcher).where({id: id});
    },

    delete: (id) => {
        return connection("teatcher").where({id: id}).del();
    },
    
};

connection.select()