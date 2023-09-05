import { MongoClient } from "mongodb";

export default function useClient() {
  let mdp = process.env.BDD_PASSWORD;
  let client = new MongoClient(
    `mongodb+srv://obelisque59:${mdp}@cluster0.guauuz0.mongodb.net/?retryWrites=true&w=majority`
  );
  return client;
}
