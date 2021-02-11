const Sequelize =require("sequelize");

var db=new Sequelize("projet7","root","",{host:"localhost",dialect:"mysql"});

module.exports=db;