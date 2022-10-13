"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdc = mdc;

function mdc(num1, num2) {
  var resto;

  do {
    resto = num1 % num2;
    num1 = num2;
    num2 = resto;
  } while (resto != 0);

  console.log(num1);
  return num1;
}