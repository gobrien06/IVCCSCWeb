var knex = require('../../database/database');


function getPosts(res) {
    knex.select('*').from('posts').orderBy('date', 'desc').limit(40).then(result => {
        response = {success: true, length: result.length};
        let i = 0;
        for(row of result) {
<<<<<<< HEAD
                response[i] = {
                    author: row['author'],
                    avatar: row['avatar'],
                    date: row['date'],
                    content: row['content']
                };
                i++;
=======
            response[i] = {
                author: row['author'], 
                avatar: row['avatar'], 
                date: (new Date(row['date'])).toDateString(), 
                content: row['content']
            };
            i++;
>>>>>>> c0ee0e07... Changed format of date returned
        }
        res.json(response);
      }, result => {
        res.json({success: false});
    });
}

module.exports = {getPosts};
