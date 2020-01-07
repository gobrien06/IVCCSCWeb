
var env = app.get('env');
var knex_config = require('../config/knex-config');
var knex = require('knex')(knex_config[env])

knex.schema.hasTable('users').then(exists => {
    if (!exists) {
      return knex.schema.createTable('users', function(t) {
        t.uuid('id').primary();
        t.string('first_name', 100);
        t.string('last_name', 100);
        t.text('bio');
      });
    }
  });

module.export = knex;