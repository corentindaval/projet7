const Sequelize = require("sequelize");

var db = new Sequelize("projet7", "root", "", { host: "localhost", dialect: "mysql", timezone: "+02:00" });
//mise en forme de la date et fuseaux horaire dans la config sequelize
//[Sequelize.fn("date_format",Sequelize.col("date_creation"),"%H:%i %d/%m/%Y"),"date_de_creation_format"]

module.exports = db;