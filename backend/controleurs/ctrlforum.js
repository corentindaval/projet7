const forum = require('../models/forum');
const Sequelize =require("sequelize");


exports.nvforum = (req, res, next) => {/*route signup */
    console.log(req.body);
    forum.create({
        titre: req.body.titre
        
    })
    .then(() => res.status(201).json({ message: 'forum creer' }))

    .catch(error => res.status(400).json({ message: 'titre' }))


};
/*identifiant déja utiliser 
throw new Error("identifiant déja utiliser")
*/
exports.updateforum = (req, res, next) => {/*route login*/
 
};

exports.suprforum = (req, res, next) => {/*route login*/
 
};

exports.listforum=(req,res,next)=>{
    forum.findAll({attributes:["id","titre",[Sequelize.fn("date_format",Sequelize.col("date_de_creation"),"%H:%i %d/%m/%Y"),"date_de_creation_format"]]})
    .then(forums => res.status(200).json(forums))
    .catch(error => res.status(400).json({ error }));


};