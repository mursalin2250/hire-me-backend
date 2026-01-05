import express from "express";
import { createUser } from "./user.controller.js";
import validator from "../../middleware/validator.middleware.js";
import { createUserValidatorSchema } from "./user.validator.js";

const router = express.Router();

router.post("/", validator(createUserValidatorSchema), createUser);

export default router;