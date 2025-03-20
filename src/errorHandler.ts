import { Request, Response, NextFunction } from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const handleNotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).sendFile(path.join(__dirname, "../public/static", "404.html"));
};