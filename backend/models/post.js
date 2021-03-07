const {Sequelize,DataTypes} = require('sequelize');
const db=require("../middleware/db-config");

const Post =db.define("post",{
    idforum:{
        type:DataTypes.STRING
    },
    idcreateur:{
        type:DataTypes.STRING
    },
    media:{
        type:DataTypes.STRING
    },
    contenu:{
        type:DataTypes.STRING
    },
    date_creation:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },
});



module.exports = Post;