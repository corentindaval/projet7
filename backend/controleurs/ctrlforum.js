const forum = require('../models/forum');
const Sequelize = require("sequelize");


exports.nvforum = (req, res, next) => {/*création d' un forum */
    console.log(req.body);
    forum.create({
        titre: req.body.titre,
        idcreateur: req.body.idcreateur
    })
        .then(() => res.status(201).json({ message: 'forum creer' }))

        .catch(error => res.status(400).json({ message: 'titre' }))


};
/*identifiant déja utiliser 
throw new Error("identifiant déjà utilisé")
*/
exports.updateforum = (req, res, next) => {/*modification d un forum*/

};

exports.suprforum = (req, res, next) => {/*supression d un forum*/
    console.log(req.body);
    forum.findOne({ where: { id: req.body.id } })
        .then(forumsupr => {
            if (req.droituser == "admin" || req.body.userid == forum.idcreateur) { //rajouter si utilisateur a créé post
                forum.destroy({ where: { id: req.body.id } })
                    .then(() => res.status(200).json({ message: 'objet suprimer' }))
                    .catch(error => res.status(400).json({ error }));
            } else {
                req.status(401).json({ message: "supresion interdite" })
            }
        })
        .catch(error => res.status(500).json({ error }));
};

exports.listforum = (req, res, next) => {//mise en place de la liste des forums
    forum.findAll({ attributes: ["id", "titre", [Sequelize.fn("date_format", Sequelize.col("date_de_creation"), "%H:%i %d/%m/%Y"), "date_de_creation_format"], [Sequelize.fn("date_format", Sequelize.col("date_dernier_post"), "%H:%i %d/%m/%Y"), "date_dernier_post_format"]] })
        .then(forums => res.status(200).json(forums))
        .catch(error => res.status(400).json({ error }));


};