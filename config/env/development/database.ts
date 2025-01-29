// config/database.js (esempio per sviluppo)
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'mydb'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'la_tua_password'), // <-- Deve essere una stringa!
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});