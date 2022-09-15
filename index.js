// import express from "express"
// import dotenv from "dotenv"

// dotenv.config()
// const PORT = process.env.PORT

// const app = express()

// app.listen(PORT, () => {
//   console.log("Server listening in port", PORT)
// })

// FileSystem
import fs from "fs"
import { readDB, writeDB } from "./db/index.js"

// JSON string
const dbObject = readDB()

console.log(dbObject)

dbObject.expenses.push({
  id: 1,
  name: "Bensin",
  nominal: 10000,
  category: "Transportasi"
})

writeDB(dbObject)