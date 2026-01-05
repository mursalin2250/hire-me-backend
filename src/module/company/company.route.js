import express from "express";
import { createCompany, deleteCompany, getAllCompany, getCompany, updateCompany } from "./company.controller.js";
import validator from "../../middleware/validator.middleware.js";
import { createCompanyValidatorSchema, deleteCompanyValidatorSchema, getCompanyValidatorSchema, updateCompanyValidatorSchema } from "./company.validator.js";
import { authenticate, authorizeAdmin, authorizeEmployer } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, authorizeEmployer, validator(createCompanyValidatorSchema), createCompany);
router.get("/", authenticate, validator(getCompanyValidatorSchema), getCompany);
router.get("/all", authenticate, authorizeAdmin, getAllCompany);
router.put("/", authenticate, authorizeEmployer, validator(updateCompanyValidatorSchema), updateCompany);
router.delete("/", authenticate, authorizeAdmin, validator(deleteCompanyValidatorSchema), deleteCompany);

export default router;