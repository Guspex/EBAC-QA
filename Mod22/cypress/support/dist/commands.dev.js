"use strict";

/// <reference types="cypress" />
Cypress.Commands.add('login', function (pass, user) {
  var fd = new FormData();
  fd.append('log', user);
  fd.append('pwd', pass);
  fd.append('wp-submit', "Acessar");
  fd.append('redirect_to', "/wp-admin");
  fd.append('testcookie', 1);
  cy.request({
    url: '/wp-login.php',
    method: 'POST',
    body: fd
  }).then(function (resp) {
    resp.headers['set-cookie'].forEach(function (cookie) {
      var firstPart = cookie.split(';')[0];
      var divisor = firstPart.indexOf('=');
      var key = firstPart.substring(0, divisor);
      var value = firstPart.substring(divisor + 1);
      cy.setCookie(key, value);
    });
  });
  cy.visit('/my-account/');
});