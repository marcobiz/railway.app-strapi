// config/env/production/database.ts (versione corretta)
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: parseInt(env('DATABASE_PORT', '5432')), // Usa parseInt per i numeri
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env('DATABASE_SSL') === 'true' ? { // Gestisci SSL come stringa
        rejectUnauthorized: env('DATABASE_SSL_REJECT_UNAUTHORIZED') === 'true'
      } : false,
    },
    options: {
      autoMigration: true, // Abilita migrazioni automatiche
    },
  },
});
