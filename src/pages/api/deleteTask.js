import { MongoClient } from 'mongodb'
let mdp = process.env.BDD_PASSWORD
const client = new MongoClient(
  `mongodb+srv://obelisque59:${mdp}@cluster0.guauuz0.mongodb.net/?retryWrites=true&w=majority`
)

export default async function Handler(req, res) {
  try {
    await client.connect()
    let db = client.db('Todo')
    let coll = db.collection('tasks')
    //    let deleted = coll.deleteMany()
    console.log(req.body)
    res.status(200).json({ message: 'yooyy' })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}
