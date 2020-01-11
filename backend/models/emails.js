var knex = require('../../database/database');

function addEmail(res, email) {
    knex('email_list').insert({user_email: email}).then(result => {
        res.json({success: true});
      }, result => {
        res.json({success: false});
    });
}

function deleteEmail(res, email) {
    knex('email_list').where({user_email: email}).del().then(result => {
        res.json({success: true});
      }, result => {
        res.json({success: false});
    });
}

module.exports = {addEmail, deleteEmail};