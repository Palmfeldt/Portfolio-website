import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";
import path, { dirname } from "path";
import { loadMarkdownFiles } from "./markdownMgmt";
import { handleNotFound } from "./errorHandler";
import { marked } from "marked";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "public", "static")));

const directoryPath = path.join(__dirname, "..", "MD-files");
const maxLength = 500; // Maximum number of characters to include
let htmlContent = loadMarkdownFiles(directoryPath, maxLength);

app.get(["/", "/index.html"], (req: Request, res: Response) => {
  const indexPath = path.join(__dirname, "..", "public", "index.html");

  fs.readFile(indexPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Could not read index.html");
      return;
    }

    const modifiedHtml = data.replace('<div class="replacer"></div>', htmlContent);
    res.send(modifiedHtml);
  });
});

app.get("/markdown/:filename", (req: Request, res: Response) => {
  const filename = req.params.filename;
  const filePath = path.join("MD-files", `${filename}.md`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(404);
      return;
    }

    const htmlContent = marked(data);
    res.send(htmlContent);
  });
});

// Use the 404 error handler
app.use(handleNotFound);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});