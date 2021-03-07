const post = require('../models/post');



exports.nvpost = (req, res, next) => {/*route signup */
    console.log(req.body);
    post.create({
       // idforum:req.body,
        idcreateur: localStorage.userId,
        media:req.body.image,
        contenu:req.body.contenu
    })
    .then(() => res.status(201).json({ message: 'post creer' }))

    .catch(error => res.status(400).json({ message: 'idcreateur' }))

};
/*identifiant déja utiliser 
throw new Error("identifiant déja utiliser")
*/
exports.modifpost = (req, res, next) => {/*route login*/
 
};

exports.suprpost = (req, res, next) => {/*route login*/
 
};


exports.creerlistpost = (req, res, next) => {/*route login*/
        post.findAll({attributes:["id","titre",[Sequelize.fn("date_format",Sequelize.col("date_de_creation"),"%H:%i %d/%m/%Y"),"date_de_creation_format"]]})
        .then(forums => res.status(200).json(forums))
        .catch(error => res.status(400).json({ error }));
    
    
    
};

