const {Sequelize} = require('sequelize');
const db=require("../middleware/db-config");

const Forum =db.define("forum",{
    titre:{
        type:DataTypes.STRING
    },
    date_de_creation:{
        type:DataTypes.STRING
    },
    date_dernier_post:{
        type:DataTypes.STRING
    },
});



module.exports = Forum;