// local package
// const localModule = require('./path-to-module')
// core package
// const fs = require('node:fs')
// third party package
const upperCase = require("upper-case").upperCase;

function greet(name) {
  console.log(upperCase(`Hello ${name}, welcome to my package`))
}

greet()

module.exports = greet;