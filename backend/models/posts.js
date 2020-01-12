var knex = require('../../database/database');


function getPosts(res) {
    knex.select('*').from('posts').orderBy('date', 'desc').limit(40).then(result => {
        response = {success: true, length: result.length};
        let i = 0;
        for(row of result) {
            response[i] = {
                author: row['author'], 
                avatar: row['avatar'], 
                date: (new Date(row['date'])).toDateString(), 
                content: row['content']
            };
            i++;
        }
        res.json(response);
      }, result => {
        res.json({success: false});
    });
}

module.exports = {getPosts};