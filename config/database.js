module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'contentdev'),
      user: env('DATABASE_USERNAME', 'strapiDevUser'),
      password: env('DATABASE_PASSWORD', 'ABD}*%jDx2KX^(@i'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
