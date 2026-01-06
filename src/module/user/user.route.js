import express from "express";
import { changePassword, createUser, deleteUser, getAccessToken, getAllUsers, getUser, loginUser, updateUser } from "./user.controller.js";
import validator from "../../middleware/validator.middleware.js";
import { accessTokenValidatorSchema, changePasswordValidatorSchema, createUserValidatorSchema, deleteUserValidatorSchema, getUserValidatorSchema, loginUserValidatorSchema, updateUserValidatorSchema } from "./user.validator.js";
import { authenticate, authorizeAdmin, authorizeEmployer } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", validator(createUserValidatorSchema), createUser);
router.post("/login", validator(loginUserValidatorSchema), loginUser);
router.post("/token", validator(accessTokenValidatorSchema), getAccessToken);
router.get("/", authenticate, validator(getUserValidatorSchema), getUser);
router.get("/all", authenticate, authorizeAdmin, getAllUsers);
router.put("/update",authenticate, authorizeEmployer, validator(updateUserValidatorSchema), updateUser);
router.delete("/delete",authenticate, authorizeAdmin, validator(deleteUserValidatorSchema), deleteUser);
router.post("/change-password", authenticate, validator(changePasswordValidatorSchema), changePassword);


export default router;