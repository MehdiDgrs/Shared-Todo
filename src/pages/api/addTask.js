import { MongoClient } from 'mongodb'
let mdp = process.env.BDD_PASSWORD
let client = new MongoClient(
  `mongodb+srv://obelisque59:${mdp}@cluster0.guauuz0.mongodb.net/?retryWrites=true&w=majority`
)
export default async function handler(req, res) {
  try {
    await client.connect()
    const database = client.db('Todo')
    const collection = database.collection('tasks')
    let request = JSON.parse(req.body)
    console.log(request)
    let doc = { nom: request.name, task: request.task }
    const result = await collection.insertOne(doc)
    console.log(result)
    res.status(200).json({ message: 'sendtodb' })
  } catch (error) {
    res.status(400).json({ message: 'error' + error })
  }
}
