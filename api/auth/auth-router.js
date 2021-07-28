const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets');

Users = require('./auth-model');



router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        }).catch(err => {
            console.log('User Registration', err)
            res.status(500).json(error);
        })
})


router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = makeToken({ user })
                const id = user.id
                res.status(200).json({ token, id })
            } else {
                res.status(401).json({ message: 'Invalid Login Credentials' })
            }
        })
        .catch(err => {
            console.log('Login Error', err)
            res.status(500).json(error);
        })
})


function makeToken(user) {
    const payload = {
        username: user.username
    };
    return jwt.sign(payload, secrets.jwtSecret)
}

module.exports = router