const forum = require('../models/forum');
const Sequelize =require("sequelize");


exports.nvforum = (req, res, next) => {/*route signup */
    console.log(req.body);
    forum.create({
        titre: req.body.titre,
        idcreateur:req.body.idcreateur
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
    console.log(req.body);
    forum.findOne({where:{ id: req.body.id }})
    .then(forumsupr => {
        if(req.droituser=="admin"||req.userid==forum.idcreateur){ //rajouter si utilisateur a creer post
        forum.destroy({where:{ id: req.body.id }})
          .then(() => res.status(200).json({ message: 'objet suprimer' }))
          .catch(error => res.status(400).json({ error }));
        }else{
            req.status(401).json({message:"supresion interdite"})
        }
    })
    .catch(error => res.status(500).json({ error }));
};

exports.listforum=(req,res,next)=>{
    forum.findAll({attributes:["id","titre",[Sequelize.fn("date_format",Sequelize.col("date_de_creation"),"%H:%i %d/%m/%Y"),"date_de_creation_format"]]})
    .then(forums => res.status(200).json(forums))
    .catch(error => res.status(400).json({ error }));


};