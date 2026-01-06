import express from "express";
import { createJob, deleteJob, getAllJob, getJob, updateJob } from "./job.controller.js";
import validator from "../../middleware/validator.middleware.js";
import { createJobValidatorSchema, deleteJobValidatorSchema, getJobValidatorSchema, updateJobValidatorSchema } from "./job.validator.js";
import { authenticate, authorizeAdmin, authorizeEmployer } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, authorizeEmployer, validator(createJobValidatorSchema), createJob);
router.get("/", authenticate, validator(getJobValidatorSchema), getJob);
router.get("/all", getAllJob);
router.put("/", authenticate, authorizeEmployer, validator(updateJobValidatorSchema), updateJob);
router.delete("/", authenticate, authorizeAdmin, validator(deleteJobValidatorSchema), deleteJob);


export default router;