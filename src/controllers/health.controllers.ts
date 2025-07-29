import { Request, Response } from "express";

export const healthcheck = (req: Request, res: Response) => {
  const health = {
    uptime: process.uptime(),
    message: "OK",
    data: Date.now(),
  };

  try {
    console.log("health check complete");
    return res.status(200).json({
      message: "successful",
    });
  } catch (error) {
    console.log(`Error occured during performing health check, ${error}`);
    return res.status(503).send();
  }
};
