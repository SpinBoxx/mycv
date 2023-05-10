import { db, sql } from "@/lib/kysely";

export async function seed() {
  const createTable = await db.schema
    .createTable("contact")
    .ifNotExists()
    .addColumn("id", "serial", (cb) => cb.primaryKey())
    .addColumn("name", "varchar(255)", (cb) => cb.notNull())
    .addColumn("email", "varchar(255)", (cb) => cb.notNull().unique())
    .addColumn("message", "text", (cb) => cb.notNull())
    .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute();
  return {
    createTable,
  };
}
