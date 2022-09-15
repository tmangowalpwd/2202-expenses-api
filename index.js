import express from "express"
import dotenv from "dotenv"
import { expensesRoute } from "./routes/index.js"

dotenv.config()
const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use("/expenses", expensesRoute)

app.listen(PORT, () => {
  console.log("Server listening in port", PORT)
})
