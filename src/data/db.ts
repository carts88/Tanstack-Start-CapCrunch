import { createServerOnlyFn } from '@tanstack/react-start';
import { Pool } from 'pg';

// Create the pool as a server-only singleton
export const getPool = createServerOnlyFn(() => {
  // if (!process.env.DATABASE_URL) {
  //   throw new Error('DATABASE_URL is required')
  // }

  const pool = new Pool({
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    max: 1,
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
  })

  return pool
})