const user = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Sequelize = require("sequelize");




exports.signup = (req, res, next) => {/*inscription */
    console.log(req.body);
    bcrypt.hash(req.body.mdp, 10)
        .then(hash => {
            delete req.body.userId;
            // console.log(hash);
            // let drnvut="";

            // console.log("contenu_user:",user.findAll({attributes:["id","droit"]}));
            // if(user.findAll({attributes:["id","droit"]})!=[""]){
            // drnvut="utilisateur";
            // }else{
            // drnvut="admin";
            // }

            user.create({
                username: req.body.identifiant,
                password: hash,
                // droit:"admin"
                droit: "utilisateur"
                // droit:drnvut
            })
                // console.log(user.username,user.password,user.droit);
                // user.save()
                .then(user => {
                    res.status(200).json({
                        userId: user.id,
                        droituser: user.droit,
                        nomuser: user.username,
                        token: jwt.sign(
                            { userId: user.id, droituser: user.droit, nomuser: user.username },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })

                .catch(error => res.status(400).json({ message: "identifiant" }))


        })
        .catch(error => res.status(500).json({ error }));
};
/*identifiant déja utiliser 
throw new Error("identifiant déja utiliser")
*/
exports.login = (req, res, next) => {/*connexion*/
    user.findOne({ where: { username: req.body.identifiant } })
        .then(user => {
            console.log(user.username, user.password);
            if (!user) {
                console.log("cnt");
                return res.status(401).json({ error: 'utilisateur non trouvé' });
            }
            bcrypt.compare(req.body.mdp, user.password)
                .then(valid => {
                    if (!valid) {
                        console.log("mdpnt");
                        return res.status(401).json({ error: 'mot de passe incorrect' });
                    }
                    // console.log(user);
                    //console.log(user.id);
                    // console.log("reussi");
                    res.status(200).json({
                        userId: user.id,
                        droituser: user.droit,
                        nomuser: user.username,
                        token: jwt.sign(
                            { userId: user.id, droituser: user.droit, nomuser: user.username },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.supruser = (req, res, next) => {/*supression d un utilisateur*/
    console.log("requete:", req.body);
    user.findOne({ where: { id: req.body.id } })
        .then(usersupr => {
            user.destroy({ where: { id: req.body.id } })
                .then(() => res.status(200).json({ message: 'objet suprimer' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};