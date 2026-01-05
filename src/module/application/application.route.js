import express from "express";
import { createApplication, deleteApplication, getAllApplication, getApplication, updateApplication } from "./application.controller.js";
import validator from "../../middleware/validator.middleware.js";
import { createApplicationValidatorSchema, deleteApplicationValidatorSchema, getApplicationValidatorSchema, updateApplicationValidatorSchema } from "./application.validator.js";
import upload from "../../middleware/multerConfig.js";
import { authenticate, authorizeAdmin, authorizeEmployer } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, upload.single("cv"), validator(createApplicationValidatorSchema), createApplication);
router.get("/", authenticate, validator(getApplicationValidatorSchema), getApplication);
router.get("/all", getAllApplication);
router.put("/", authenticate, authorizeEmployer, validator(updateApplicationValidatorSchema), updateApplication);
router.delete("/", authenticate, authorizeAdmin, validator(deleteApplicationValidatorSchema), deleteApplication);

export default router;