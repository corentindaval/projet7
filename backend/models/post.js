const {Sequelize} = require('sequelize');
const db=require("../middleware/db-config");

const Post =db.define("post",{
    forum:{
        type:DataTypes.STRING
    },
    createur:{
        type:DataTypes.STRING
    },
    contenu:{
        type:DataTypes.STRING
    },
    date_creation:{
        type:DataTypes.DATE
    },
});



module.exports = Post;