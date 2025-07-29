import express from "express";

import { healthcheck } from "../controllers/health.controllers";

export const router = express.Router();

router.get("/health", healthcheck);
