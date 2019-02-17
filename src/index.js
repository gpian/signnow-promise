const signnow = require('signnow');
const promiseme = require('./promiseme');

module.exports = settings => promiseme(signnow(settings));
