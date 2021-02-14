const user = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Sequelize =require("sequelize");




 exports.signup = (req, res, next) => {/*route signup */
    console.log(req.body);
    bcrypt.hash(req.body.mdp, 10)
        .then(hash => {
            delete req.body.userId;
           // console.log(hash);
            const User= user.create({
                username: req.body.identifiant,
                password: hash,
                droit:"admin"
            });
           // console.log(user.username,user.password,user.droit);
            user.save()
                .then(() => res.status(201).json({ message: 'utilisateur enregistré' }))

                .catch(error => res.status(400).json({ message: "identifiant" }))


        })
        .catch(error => res.status(500).json({ error }));
};
/*identifiant déja utiliser 
throw new Error("identifiant déja utiliser")
*/
exports.login = (req, res, next) => {/*route login*/
    user.findOne({ username: req.body.identifiant })
        .then(user => {
            console.log(user.username,user.password);
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
                        token: jwt.sign(
                            { userId: user.id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

