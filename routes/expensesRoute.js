import express from "express"
import { expensesController } from "../controllers/index.js";

const router = express.Router();

router.get("/", expensesController.getExpenses)
router.get("/:id", expensesController.getExpenseById)
router.post("/", expensesController.createExpense)
router.patch("/:id", expensesController.editExpense)
router.delete("/:id", expensesController.deleteExpenseById)

export default router