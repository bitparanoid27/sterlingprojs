import express from "express";

const app = express();
const PORT: number = 3000;

import { router as healthcheckroute } from "./routes/health.routes";

app.use("/healthcheck", healthcheckroute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
