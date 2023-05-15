const req = require('supertest')
const API_URL = process.env.API_URL


let getAccessToken = (user, pass) => {
    return req(API_URL)
    .post('login')
    .send({
        "username": user,
        "password": pass
    })
    .set('Accept', 'application/json')
    .then(response =>{
        return response.body.accessToken
    })

}

module.exports = { getAccessToken }

    
   
