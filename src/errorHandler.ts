import { Request, Response, NextFunction } from "express";
import path from "path";

export const handleNotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, "../../frontend/static", "404.html"));
};