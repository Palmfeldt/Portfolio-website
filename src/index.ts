// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.static("frontend"));

app.get("/", (req: Request, res: Response) => {
  res.send("frontend/index.html");
});

// Route to render Markdown files as HTML
app.get("/markdown/:filename", (req: Request, res: Response) => {
  const filename = req.params.filename;
  const filePath = path.join( "MD-files", `${filename}.md`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(404).send("File not found");
      return;
    }

    const htmlContent = marked(data);
    res.send(htmlContent);
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});