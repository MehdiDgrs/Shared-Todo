import Client from "@/app/components/useClient";
import bcrypt from "bcrypt";
export default async function addUser(req, res) {
  const saltRounds = 10;

  let findUser = async (request, collection) => {
    let user = await collection.findOne({ name: request.name });
    return user;
  };
  try {
    let client = Client();
    client.connect();
    const database = client.db("Todo");
    const collection = database.collection("users");

    let request = req.body;
    console.log(request);
    let result = await findUser(request, collection);
    if (result) {
      res.status(200).json({ message: "exist" });
    } else {
      let salt = await bcrypt.genSalt(saltRounds);
      let hash = await bcrypt.hash(request.mdp, salt);
      let doc = { name: request.name, mdp: hash };
      await collection.insertOne(doc);
      res.status(200).json({ message: "created" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "error" });
  }
}
