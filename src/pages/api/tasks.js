const { MongoClient } = require('mongodb')
async function listDatabases(client) {
  try {
    databasesList = await client.db().admin().listDatabases()
  } catch {
    console.log('error fetching all databases')
  }
  console.log('Databases:')
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`))
}
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
