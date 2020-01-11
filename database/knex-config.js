
module.exports = {
    development: {
        client: 'pg',
        connection: process.env.POSTGRES_TEST_URL,
    }
}