const app = require('./index');
const request = require('supertest');


describe('User API', () => {
    it('POST /api/user/create should create a new user', async () => {
        const res = await request(app)
            .post('/api/user/create')
            .send({
                name: "John Doe",
                email: "john@example.com"
            })
            .expect(201);

        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: "John Doe",
                email: "john@example.com"
            })
        );
    });
});
