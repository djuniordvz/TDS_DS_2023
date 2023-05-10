const connection = require("../mysql_connection");

module.exports = {
    find: () => {
        return connection.select().from("funcionarios");
    },

    findbyID: (id) => {
        return connection.select().from("funcionarios").where("id", "=", id);
    },

    post: (worker) => {
        return connection.insert(worker).into("funcionarios");
    },

    put: (worker, id) => {
        return connection("funcionarios").update(worker).where({id: id});
    },

    delete: (id) => {
        return connection("funcionarios").where({id: id}).del();
    },
    
    findDependents: () => {
        return connection("funcionarios").innerJoin("dependentes", "funcionarios.id", "dependentes.funcionario_id");
    },

    findDependentsFunc: () => {
        return connection.select("FUN.ID",
                                 "FUN.NOME AS NOME_FUNCIONARIO",
                                 "DEP.NOME AS NOME_DEPENDENTE",
                                 "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
        ).from("FUNCIONARIOS AS FUN")
        .innerJoin("DEPENDENTES AS DEP", "FUN.ID", "DEP.FUNCIONARIO_ID")
        .where("FUN.ID", id);
    },

    findDependentsFunc: (id) => {
        return connection.select("FUN.ID",
                                 "FUN.NOME AS NOME_FUNCIONARIO",
                                 "DEP.NOME AS NOME_DEPENDENTE",
                                 "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
        ).from("FUNCIONARIOS AS FUN")
        .innerJoin("DEPENDENTES AS DEP", "FUN.ID", "DEP.FUNCIONARIO_ID")
        .where("FUN.ID", id);
    },
};

connection.select()