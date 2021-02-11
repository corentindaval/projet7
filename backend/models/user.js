const {Sequelize,DataTypes} = require('sequelize');
const db=require("../middleware/db-config");

const User =db.define("user",{
    username:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    droit:{
        type:DataTypes.STRING
    },
});



module.exports = User;