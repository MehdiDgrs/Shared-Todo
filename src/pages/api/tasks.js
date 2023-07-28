const { MongoClient } = require('mongodb')

export default async function handler(req, res) {
  let mdp = process.env.BDD_PASSWORD
  const client = new MongoClient(
    `mongodb+srv://obelisque59:${mdp}@cluster0.guauuz0.mongodb.net/?retryWrites=true&w=majority`
  )
  try {
    await client.connect()
    const database = client.db('Todo')
    const collection = database.collection('tasks')

    let tasksList = await collection.find().toArray()
    console.log(tasksList)
    res.status(200).json(tasksList)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'fail' })
  } finally {
    await client.close()
  }
}
