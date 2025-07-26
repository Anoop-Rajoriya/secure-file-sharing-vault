import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import healthController from "../controllers/health.controller.js";

const router = Router();

router.route("/").get(asyncHandler(healthController));

export default router;
