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

app.use(express.static(path.join(__dirname, "frontend", "static")));

let htmlContent = "";

// Function to read and process Markdown files
const loadMarkdownFiles = () => {
  const directoryPath = path.join(__dirname, "MD-files");

  const maxLength = 500; // Maximum number of characters to include

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Could not read md files");
    }

    const markdownFiles = files.filter(file => path.extname(file.toLowerCase()) === ".md");

    markdownFiles.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      let markdownData = fs.readFileSync(filePath, "utf8");
      if (markdownData.length > maxLength) {
        markdownData = markdownData.substring(0, maxLength) + "...";
      }
      htmlContent += "<article>" + marked(markdownData) + "</article>";
    });
  });
};

// Load Markdown files when the application starts
loadMarkdownFiles();

app.get(["/", "/index.html"], (req: Request, res: Response) => {
  const indexPath = path.join(__dirname, "frontend", "index.html");

  fs.readFile(indexPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Could not read index.html");
      return;
    }

    const modifiedHtml = data.replace('<div class="replacer"></div>', htmlContent);
    res.send(modifiedHtml);
  });
});

// Route to render Markdown files as HTML
app.get("/markdown/:filename", (req: Request, res: Response) => {
  const filename = req.params.filename;
  const filePath = path.join("MD-files", `${filename}.md`);

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