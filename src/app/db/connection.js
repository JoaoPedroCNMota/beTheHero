const knex = require('knex');
const config = require('../../knexfile.js');
const con = knex(config.development);

module.exports = con;