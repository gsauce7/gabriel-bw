const router = require("express").Router();

const Users = require('./users-model.js');

router.get("/", (req, res) => {

  console.log("token", req.decodedToken);

  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(users => {
      res.status(200).json(users);
    })

    .catch(err => {
      res.status(500).json({ error: 'user not returned' })
    })
})



module.exports = router;