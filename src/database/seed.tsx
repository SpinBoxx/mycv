import { db, sql } from "@/database/database";

console.log({
  POSTGRES_URL: process.env.POSTGRES_URL,
  POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
});

export async function seed() {
  const createTable = await db.schema
    .createTable("test")
    .ifNotExists()
    .addColumn("name", "varchar(255)", (cb) => cb.notNull())
    .addColumn("createdAt", sql`timestamp with time zone`, (cb) =>
      cb.defaultTo(sql`current_timestamp`)
    )
    .execute();
  await db
    .insertInto("contact")
    .values({ name: "Jennifer" })

    .executeTakeFirstOrThrow();
  console.log(`Created "users" table`);

  return {
    createTable,
  };
}
