import Client from "@/app/components/useClient";

export default async function addUser(req, res) {
  try {
    let client = Client();
    client.connect();
    const database = client.db("Todo");
    const collection = database.collection("users");
    let request = JSON.parse(req.body);
    let doc = { name: request.name, mdp: request.mdp };
    const result = await collection.insertOne(doc);
    console.log(result);
    res.status(200).json({ message: "from adduser" });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
}
