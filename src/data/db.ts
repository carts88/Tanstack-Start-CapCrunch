import { createServerOnlyFn } from '@tanstack/react-start'
import { Pool } from 'pg'

export const pool = new Pool({
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
  max: 10,
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
})

export const getPool = createServerOnlyFn(() => {
  return pool
})