"use strict";

var req = require('supertest');

var _require = require('path'),
    resolve = _require.resolve;

var API_URL = process.env.API_URL;
describe('Image Upload', function () {
  it('Command Injection', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(req(API_URL).post('/image/upload').attach('file', resolve("./resources/ & echo 'Meu Comando' & ls -la &")).end(function (error, response) {
              expect(response.statusCode).toEqual(201);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});