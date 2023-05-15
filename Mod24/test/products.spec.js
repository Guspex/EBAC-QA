const req = require('supertest');
const { getAccessToken } = require('../utils/request');
const API_URL = process.env.API_URL

describe('Products', () => {
    let token

    beforeAll(async ()=>{
        token = await getAccessToken('admin', 'admin')
    })

    it('(E2E) Should list products', async () => {
        await req(API_URL)
        .get('products')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .then(response=>{
            expect(response.statusCode).toEqual(200)
            expect(response.body).toBeInstanceOf(Array)
        })       
    });
    
});
