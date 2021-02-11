const user = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Sequelize =require("sequelize");




 exports.signup = (req, res, next) => {/*route signup */
    console.log(req.body);
    bcrypt.hash(req.body.mdp, 10)
        .then(hash => {
            delete req.body.userId;
            const User= user.create({
                login: req.body.login;
                mdp: hash
            });
            User.save()
                .then(() => res.status(201).json({ message: 'utilisateur enregistrer' }))

                .catch(error => res.status(400).json({ message: "identifiant" }))


        })
        .catch(error => res.status(500).json({ error }));
};
/*identifiant déja utiliser 
throw new Error("identifiant déja utiliser")
*/
exports.login = (req, res, next) => {/*route login*/
    user.findOne({ login: req.body.login })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'utilisateur non trouver' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'mot de passe incorrect' });
                    }
                    console.log(user);
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

