// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { db } from "@/lib/kysely";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db
    .insertInto("contact")
    .values([
      {
        name: "Guillermo Rauch",
        email: "bonjour2@vercel.com",
        message: "Lorem",
      },
    ])
    .execute();
  console.log("Seeded database with 1 contact");

  res.status(200).json({ name: "John Doe" });
}
