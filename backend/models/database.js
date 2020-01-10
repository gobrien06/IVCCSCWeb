
var env = process.env.NODE_ENV || 'development';
var knex_config = require('../config/knex-config');
var knex = require('knex')(knex_config[env]);

module.exports = knex;