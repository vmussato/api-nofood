const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:nofood123456@ds245772.mlab.com:45772/nofood'
    }
}

module.exports = variables;