import { connectDB, client, poolOpen } from '../../app/db/connexionPool'
export default async function handler(req, res) {
  console.log(client)

  try {
    console.log(poolOpen)
    let db = await connectDB()
    console.log(poolOpen)
    let collection = db.collection('tasks')
    let tasksList = await collection.find().toArray()

    // await client.connect()
    // const database = client.db('Todo')
    // const collection = database.collection('tasks')

    // console.log(tasksList)
    res.status(200).json(tasksList)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'fail' })
  } finally {
    await client.close()
  }
}
