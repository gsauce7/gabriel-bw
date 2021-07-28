const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const authenticate = require('./auth/auth-middleware');
const authRouter = require('./auth/auth-router.js');
// const itemRouter = require('./items/items-router');

// remove this
function getAllUsers() { return db('users') }
// remove this
async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api', authRouter);
// server.use('/api/items', authenticate, itemRouter);

// remove this
server.get('/api/users', async (req, res) => {
  res.json(await getAllUsers())
})
// remove this
server.post('/api/users', async (req, res) => {
  res.status(201).json(await insertUser(req.body))
})

server.get('/', (req, res) => {
  res.status(200).send("<h1>Welcome to the Sauti African Marketplace API</h1>")
});

module.exports = server
