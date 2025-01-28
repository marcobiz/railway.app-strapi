export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', false) ? { 
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false)
      } : false,
    },
    options: {
      autoMigration: true,
      migrations: {
        disableForeignKeys: false,
        emitEvents: true
      },
      debug: env.bool('DATABASE_DEBUG', false)
    }
  }
});