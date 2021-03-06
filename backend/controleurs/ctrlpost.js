const post = require('../models/post');
const forum = require('../models/forum');
const { Sequelize, DataTypes } = require('sequelize');
const fs = require("fs");






exports.majdermes = (req, res, next) => {//récupération pour date du dernier post d' un forum
    post.findAll({ where: { idforum: req.body.idforum }, attributes: ["id", "idforum", "idcreateur", "nomcreateur", "media", "contenu", [Sequelize.fn("date_format", Sequelize.col("date_creation"), "%H:%i %d/%m/%Y"), "date_de_creation_format"]] })
        .then(forums => res.status(200).json(forums))
        .catch(error => res.status(400).json({ error }));


}

exports.nvpost = (req, res, next) => {/*création de post */
    console.log("corpspost:", req.body);
    // console.log(req.file.filename);

    let cmedia = "";
    if (req.file != null) {
        cmedia = req.file.filename;
    } else {
        cmedia = "";
    }
    post.create({
        idforum: req.body.idforum,
        idcreateur: req.verifieduserid,
        media: cmedia,
        contenu: req.body.contenu,
        nomcreateur: req.body.nomuser
    })


        .then(() => res.status(201).json({ message: 'post creer' }))

        .catch(error => res.status(400).json({ message: 'idcreateur' }))

};
/*identifiant déjà utilisé
throw new Error("identifiant déjà utilisé")
*/
exports.modifpost = (req, res, next) => {/*modification de post*/

};

exports.suprpost = (req, res, next) => {/*supression de post*/
    post.findOne({ where: { id: req.body.id } })
        .then(Post => {

            const filename = Post.media.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                post.destroy({ where: { id: req.body.id } })
                    .then(() => res.status(200).json({ message: 'objet suprimer' }))
                    .catch(error => res.status(400).json({ error: error.message }));
            });

        })

        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: error.message });
        });
};


exports.creerlistpost = (req, res, next) => {/*récupération liste des posts pour un forum*/
    post.findAll({ where: { idforum: req.body.idforum }, attributes: ["id", "idforum", "idcreateur", "nomcreateur", "media", "contenu", [Sequelize.fn("date_format", Sequelize.col("date_creation"), "%H:%i %d/%m/%Y"), "date_de_creation_format"]] })
        .then(forums => res.status(200).json(forums))
        .catch(error => res.status(400).json({ error }));



};

