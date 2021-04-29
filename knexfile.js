// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      user: 'admin',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }
};
