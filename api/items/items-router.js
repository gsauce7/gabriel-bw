const router = require('express').Router()
const Items = require('./items-model')

router.get('/', (req, res) => {
    Items.find()
        .then(item => {
            res.json(item)
        })
        .catch(err => res.send(err))
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    Items.findById(id)
        .then(item => {
            res.status(200).json(item);
        })

        .catch(err => {
            res.status(500).json({ error: 'item not returned' })
        })
})

router.post('/', (req, res) => {
    const item = req.body
    Items.add(item)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            res.status(500).json({ error: 'there was a server error', err })
        })
})

router.put('/:id', (req, res) => {
    const changes = req.body

    Items.update(req.params.id, changes)
        .then(item => {
            if (item) {
                Items.findById(req.params.id)
                    .then(item => {
                        res.status(200).json(item)
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: 'there was a server error'
                        })
                    })
            } else {
                res.status(404).json({
                    error: 'item not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: 'there was a server error'
            })
        })
})

router.delete('/:id', (req, res) => {
    Items.remove(req.params.id)
        .then(item => {
            if (item) {
                res.status(201).json({
                    message: 'item deleted'
                })
            } else {
                res.status(404).json({
                    error: 'item not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: 'there was a server error'
            })
        })
})

module.exports = router