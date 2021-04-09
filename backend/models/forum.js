const {Sequelize,DataTypes} = require('sequelize');
const db=require("../middleware/db-config");

const Forum =db.define("forum",{
    titre:{
        type:DataTypes.STRING
    },
    idcreateur:{
        type:DataTypes.STRING
    },
    date_de_creation:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
    date_dernier_post:{
        type:DataTypes.DATE
    },
});



module.exports = Forum;