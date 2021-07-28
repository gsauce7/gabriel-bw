const request = require('supertest')
const server = require('../api/server')
const db = require('../data/db-Config')


describe('register', () => {
    it("registers successfully", async () => {
        const res = await request(server).post('/api/auth/register')
            .send({
                username: 'gahenton',
                password: 'test',
                email: 'gabriel@testing.com'
            })
        expect(res.status).toBe(201)
    })

    it('registration fails with incomplete info', async () => {
        const res = await request(server).post('/api/auth/register')
            .send({
                username: 'blake',
            })
        expect(res.status).toBe(500)
    })
})

describe('login', () => {
    it('receives status 200 when login is successful', async () => {
        const res = await request(server).post('/api/auth/login')
            .send({
                username: 'admin',
                password: 'password'
            })
        expect(res.status).toBe(200)
    })

    it('login fails', async () => {
        const res = await request(server).post('/api/auth/login')
            .send({
                username: 'johndoe',
                password: 'p@ssword'
            })
        expect(res.status).toBe(401)
    })
})