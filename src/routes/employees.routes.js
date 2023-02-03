import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployees,
  updateEmployee,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all Employees
router.get("/padron", getEmployees);

// GET An Employee
router.get("/padron/:dni", getEmployee);

// DELETE An Employee
router.delete("/padron/:dni", deleteEmployee);

// INSERT An Employee
router.post("/padron", createEmployee);

router.patch("/padron/:dni", updateEmployee);

export default router;
