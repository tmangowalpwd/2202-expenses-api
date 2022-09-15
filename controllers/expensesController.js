import { readDB, writeDB } from "../db/index.js"

const expensesController = {
  getExpenses: (req, res) => {
    const { category } = req.query
    const db = readDB()

    if (category) {
      const result = db.expenses.filter((val) => {
        return val.category.toLowerCase() == category.toLowerCase()
      })

      return res.status(200).json({
        message: "Get all expenses",
        data: result,
      })
    }

    return res.status(200).json({
      message: "Get all expenses",
      data: db.expenses,
    })
  },
  getExpenseById: (req, res) => {
    const { id } = req.params
    const db = readDB()

    for (let expense of db.expenses) {
      if (expense.id == id) {
        return res.status(200).json({
          message: "Get expense by ID",
          data: expense,
        })
      }
    }

    return res.status(200).json({
      message: "Expense with ID " + id + " not found",
    })
  },
  createExpense: (req, res) => {
    const db = readDB()

    db.expenses.push({
      ...req.body,
      id: !db.expenses.length ? 1 : db.expenses[db.expenses.length - 1].id + 1,
    })

    writeDB(db)

    return res.status(201).json({
      message: "Created expense",
    })
  },
  editExpense: (req, res) => {
    const { id } = req.params
    const db = readDB()

    for (let idx in db.expenses) {
      if (db.expenses[idx].id == id) {
        db.expenses[idx] = {
          ...db.expenses[idx],
          ...req.body,
        }

        writeDB(db)

        return res.status(201).json({
          message: "Edited expense",
        })
      }
    }

    return res.status(200).json({
      message: "Expense not found",
    })
  },
  deleteExpenseById: (req, res) => {
    const { id } = req.params
    const db = readDB()

    for (let idx in db.expenses) {
      if (db.expenses[idx].id == id) {
        db.expenses.splice(idx, 1)

        writeDB(db)

        return res.status(200).json({
          message: "Deleted expense",
        })
      }
    }

    return res.status(200).json({
      message: "Expense not found",
    })
  },
}

export default expensesController
