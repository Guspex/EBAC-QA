"use strict";

var req = require('supertest');

var API_URL = process.env.API_URL;
describe('User Login', function () {
  it('NoSQL Injection', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(req(API_URL).post('/no-sql/login').send({
              "email": "admin@meuemail.com.br",
              "password": {
                "$exists": true
              }
            }).set("Accept", "application/json").then(function (response) {
              expect(response.statusCode).toEqual(422);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});