import Client from "@/app/components/useClient";
import bcrypt from "bcrypt";
import { cookies } from "next/dist/client/components/headers";
export default async function findUser(req, res) {
  try {
    console.log(req.body.mdp);
    let client = Client();
    client.connect();
    const database = client.db("Todo");
    const collection = database.collection("users");
    let findDoc = await collection.findOne({ name: req.body.name });
    if (findDoc) {
      let compared = await bcrypt.compare(req.body.mdp, findDoc.mdp);
      if (compared) {
        res.status(200).json({ message: true });
      }
    } else {
      res.status(200).json({ message: false });
    }
    console.log(findDoc, "from findDoc");
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
}
