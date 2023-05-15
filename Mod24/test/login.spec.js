const req = require('supertest')
const API_URL = process.env.API_URL

describe('User Login', () => {

    it('(HealthCheck) should get acces token', () => {
        req(API_URL)
        .post('login')
        .send({
            "username": "admin",
            "password": "admin"
        })
        .set('Accept', 'application/json')
        .then(response =>{
            expect(response.statusCode).toEqual(201)
            expect(response.body.accessToken).not.toBe(undefined)
        })
    });
    
});
