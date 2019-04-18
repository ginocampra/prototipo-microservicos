module.exports = {

  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',

 // amqp: 'amqp://qotmhdjp:72EapkXqN1inYtaMl7cG6NEVhWR2KLkL@cat.rmq.cloudamqp.com/qotmhdjp',

  db: {

    development: {
      client: 'sqlite3',
      connection: {
        filename: __dirname + '/databases/accounts_dev.db'
      },
      migrations: {
        tableName: '_migrations'
      }
    },

    test: {
      client: 'sqlite3',
      connection: {
        filename: __dirname + '/databases/accounts_test.db'
      },
      migrations: {
        tableName: '_migrations'
      }
    },

    production: {
      client: 'sqlite3',
      connection: {
        filename: __dirname + '/databases/accounts.db'
      },
      migrations: {
        tableName: '_migrations'
      }
    }

  }

}
