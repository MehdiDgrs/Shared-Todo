import mongoose from 'mongoose'

const { Schema } = mongoose
let mdp = process.env.BDD_PASSWORD
console.log(mdp)
const taskSchemas = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
})
let Task

if (mongoose.models.Task) {
  Task = mongoose.model('Task')
} else {
  Task = mongoose.model('Task', taskSchemas)
}

export default async function handler(req, res) {
  try {
    await mongoose.connect(
      `mongodb+srv://obelisque59:${mdp}@cluster0.guauuz0.mongodb.net/?retryWrites=true&w=majority`
    )
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'fail' })
  }

  const firstTask = new Task({
    title: " gagner de l'argent ",
    author: 'dimeh',
  })
  await firstTask.save()
  res.status(200).json(firstTask)
}
