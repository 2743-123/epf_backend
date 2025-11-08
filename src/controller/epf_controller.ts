import { Request, Response } from "express";

import { Epf } from "../models/epfmodel";
import { AppDataSource } from "../database/db";

const PASSWORD = "As2743@123";
const epfRepo = AppDataSource.getRepository(Epf);

// 🟢 Create new record
export const createEPF = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    if (password !== PASSWORD) {
      return res.status(403).json({ message: "Invalid password" });
    }

    const record = epfRepo.create({
      name,
      password,
      createDate: new Date().toISOString(),
      workStatus: "Pending",
    });

    await epfRepo.save(record);
    return res
      .status(201)
      .json({ message: "Record created successfully", record });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating record" });
  }
};

// 🟡 Update record
export const updateEPF = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      aadharCardName,
      uanNumber,
      aadharNumber,
      dob,
      aadharMobile,
      uanPassword,
      updatedStatus,
      bankAccountNumber,
      ifscCode,
      password,
    } = req.body;

    if (password !== PASSWORD) {
      return res.status(403).json({ message: "Invalid password" });
    }

    // ✅ UAN validation (exactly 12 digits)
    if (uanNumber && !/^\d{12}$/.test(uanNumber)) {
      return res
        .status(400)
        .json({ message: "UAN number must be exactly 12 digits long" });
    }

    // ✅ Aadhaar validation (exactly 12 digits)
    if (aadharNumber && !/^\d{12}$/.test(aadharNumber)) {
      return res
        .status(400)
        .json({ message: "Aadhaar number must be exactly 12 digits long" });
    }

    // ✅ Mobile number validation (exactly 10 digits)
    if (aadharMobile && !/^\d{10}$/.test(aadharMobile)) {
      return res
        .status(400)
        .json({ message: "Mobile number must be exactly 10 digits long" });
    }

    const record = await epfRepo.findOneBy({ id: Number(id) });
    if (!record) return res.status(404).json({ message: "Record not found" });

    Object.assign(record, {
      aadharCardName,
      uanNumber,
      aadharNumber,
      dob,
      aadharMobile,
      uanPassword,
      workStatus: "Updated",
      updatedStatus,
      bankAccountNumber,
      ifscCode,
      commissionAmount: Number(req.body.commissionAmount) || 0,
      updateDate: new Date().toISOString(),
    });

    await epfRepo.save(record);
    return res.json({ message: "Record updated successfully", record });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error updating record" });
  }
};

// 🔵 Confirm record
export const confirmEPF = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { paidAmount, password } = req.body;

    if (password !== PASSWORD) {
      return res.status(403).json({ message: "Invalid password" });
    }

    const record = await epfRepo.findOneBy({ id: Number(id) });
    if (!record) return res.status(404).json({ message: "Record not found" });

    record.paidAmount = paidAmount;
    record.confirmDate = new Date().toISOString();
    record.workStatus = "Completed";

    await epfRepo.save(record);
    return res.json({ message: "Record confirmed successfully", record });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error confirming record" });
  }
};

// 🟠 Get all records
export const getAllEPF = async (req: Request, res: Response) => {
  try {
    const records = await epfRepo.find();
    return res.json(records);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching records" });
  }
};

// 🔴 Delete record
export const deleteEPF = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    // 🔐 Password check
    if (password !== PASSWORD) {
      return res.status(403).json({ message: "Invalid password" });
    }

    const record = await epfRepo.findOneBy({ id: Number(id) });
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    await epfRepo.remove(record);
    return res.json({ message: "Record deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error deleting record" });
  }
};
export const reopenEPF = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { password } = req.body;

    const epfRepo = AppDataSource.getRepository(Epf);
    const record = await epfRepo.findOne({ where: { id: Number(id) } });

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    // ✅ Password check (optional)
    if (record.password && record.password !== password) {
      return res.status(400).json({ message: "Invalid Admin Password" });
    }

    // ✅ Normalize status
    const ws = (record.workStatus ?? "").toLowerCase();
    const st = (record.status ?? "").toLowerCase();

    const isConfirmed =
      st === "confirmed" ||
      ws === "completed" ||
      ws === "confirm" ||
      ws === "confirmed";

    if (!isConfirmed) {
      return res
        .status(400)
        .json({ message: "Only confirmed complaints can be reopened" });
    }

    // ✅ RESET to pending
    record.status = "pending";
    record.workStatus = "pending";
    record.updatedStatus = "pending";
    record.confirmDate = null;
    record.updatedDate = new Date().toLocaleString("en-IN");

    await epfRepo.save(record);

    return res.json({
      message: "Reopened successfully — moved to Pending",
      record,
    });
  } catch (error) {
    console.error("Reopen Error:", error);
    return res.status(500).json({ message: "Server error while reopening" });
  }
};


