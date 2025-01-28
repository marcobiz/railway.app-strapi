export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_PRIVATE_URL'),
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', false) ? { 
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true)
      } : false,
      schema: env('DATABASE_SCHEMA', 'public'),
    },
    options: {
      autoMigration: true, // 🔑 Questo è fondamentale!
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10)
      }
    }
  }
});