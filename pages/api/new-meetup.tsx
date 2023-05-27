import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

// /api/mew-meetup
// POST /api/new-meetup

interface RequestBody {
  title: string;
  image: string;
  address: string;
  description: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const data = req.body as unknown as RequestBody;

      const client = await MongoClient.connect(
        "mongodb+srv://ahmed:l0gmeinn0w@cluster0.ccdcti6.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      client.close();

      res.status(201).json({ message: "meetup Inserted" });
    } catch (err: unknown) {
      if (err instanceof Error) console.log(err.message);
    }
  }
}

export default handler;
