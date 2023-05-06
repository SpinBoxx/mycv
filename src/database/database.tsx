import { createKysely } from "@vercel/postgres-kysely";
// import { Kysely } from "kysely";
// import pg from "pg";
interface Contact {
  name: string;
}

export interface Database {
  contact: Contact;
}
console.log({
  POSTGRES_URL: process.env.POSTGRES_URL,
  POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
});

// const { Pool } = pg;

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });
export const db = createKysely<Database>({
  connectionString:
    "postgres://default:CqOifUI4TuX7@ep-icy-tree-568518-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb",
});
// Use MysqlDialect for MySQL and SqliteDialect for SQLite.

export { sql } from "kysely";
