// /api/mew-meetup
// POST /api/new-meetup

import { NextApiRequest, NextApiResponse } from "next";

interface RequestBody {
  title: string;
  image: string;
  address: string;
  description: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = await req.body;

    const { title, image, address, description } = data;
  }
}

export default handler;
