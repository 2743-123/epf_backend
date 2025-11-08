import express from "express";
import {
  createEPF,
  updateEPF,
  confirmEPF,
  getAllEPF,
  deleteEPF,
  reopenEPF,
} from "../controller/epf_controller";

const router = express.Router();

// ➕ Create new record
router.post("/create", createEPF);

// 🔄 Update existing record
router.put("/update/:id", updateEPF);

// ✅ Confirm record (payment done)
router.put("/confirm/:id", confirmEPF);

// 📋 Get all records
router.get("/all", getAllEPF);

router.delete("/delete/:id", deleteEPF);

router.put('/reopen/:id', reopenEPF);

export default router;
