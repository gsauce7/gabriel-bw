const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const authenticate = require('./auth/auth-middleware');
const authRouter = require('./auth/auth-router.js');
const itemRouter = require('./items/items-router.js');
const userRouter = require('./users/users-router.js');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())


server.use('/api/auth', authRouter)
server.use('/api/items', itemRouter)
server.use('/api/users', authenticate, userRouter)

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
