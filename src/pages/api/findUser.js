import Client from "@/app/components/useClient";

export default async function findUser(req, res) {
  let found = false;
  let compareInput = (users, user) => {
    if (
      users.some((elem) => elem.name === user.name && elem.mdp === user.mdp)
    ) {
      found = true;
      console.log("found");
      return found;
    } else {
      console.log("not found");
    }
  };
  try {
    console.log(req.body, " from login log de la req");
    let client = Client();
    client.connect();
    const database = client.db("Todo");
    const collection = database.collection("users");
    const result = await collection.find().toArray();
    console.log(result, "from bdd");
    compareInput(result, req.body);

    res.status(200).json({ message: found });
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
}
