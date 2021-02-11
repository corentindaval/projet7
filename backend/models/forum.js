const {Sequelize,DataTypes} = require('sequelize');
const db=require("../middleware/db-config");

const Forum =db.define("forum",{
    titre:{
        type:DataTypes.STRING
    },
    date_de_creation:{
        type:DataTypes.DATE
    },
    date_dernier_post:{
        type:DataTypes.DATE
    },
});



module.exports = Forum;