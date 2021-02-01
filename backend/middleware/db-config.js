const Sequelize =require("sequelize");

var db=new Sequelize("dbname","root","root",{host:"localhost",dialect:"mysql"});

module.exports=db;