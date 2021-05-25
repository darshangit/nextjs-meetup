import { MongoClient } from "mongodb";
import { MONGO_CRED } from "../../mongo";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGO_CRED || MONGO_CRED);
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    await meetupCollection.insertOne({ ...data });
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
