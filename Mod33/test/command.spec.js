const req = require('supertest');
const { resolve } = require('path')
const API_URL = process.env.API_URL

describe('Image Upload', () => {
    it('Command Injection', async () => {
        await req(API_URL)
            .post('/image/upload')
            .attach('file', resolve("./resources/ & echo 'Meu Comando' & ls -la &"))
            .end((error, response)=>{
                expect(response.statusCode).toEqual(500)
            })
    });
});