import express from "express";
import userRoute from "./src/module/user/user.route.js";
import jobRoute from "./src/module/job/job.route.js";
import companyRoute from "./src/module/company/company.route.js";
import applicationRoute from "./src/module/application/application.route.js";

const router = express.Router();

router.use("/user", userRoute);
router.use("/job", jobRoute);
router.use("/company", companyRoute);
router.use("/application", applicationRoute);

export default router;