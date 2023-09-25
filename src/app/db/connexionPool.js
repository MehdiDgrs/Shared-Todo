import { MongoClient } from 'mongodb'

let client
let connexionState = {}
const dbName = 'Todo'
let mdp = process.env.BDD_PASSWORD
let poolOpen = 0
let db
async function connectDB() {
  if (client) return db
  else {
    client = new MongoClient(
      `mongodb+srv://obelisque59:${mdp}@cluster0.guauuz0.mongodb.net/?retryWrites=true&w=majority`
    )
    poolOpen++
    console.log(connexionState)
    if (!connexionState.connected) {
      await client.connect()
      connexionState.connected = true
    }
    console.log(connexionState)
    db = client.db(dbName)
    return db
  }
}

export { client, connexionState, poolOpen, connectDB }
