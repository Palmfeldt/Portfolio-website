import fs from "fs";
import path from "path";
import { marked } from "marked";

export const loadMarkdownFiles = (directoryPath: string, maxLength: number): string => {
  let htmlContent = "";

  try {
    const files = fs.readdirSync(directoryPath);
    const markdownFiles = files.filter(file => path.extname(file.toLowerCase()) === ".md");

    markdownFiles.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      let markdownData = fs.readFileSync(filePath, "utf8");
      if (markdownData.length > maxLength) {
        markdownData = markdownData.substring(0, maxLength) + "...";
      }
      htmlContent += "<article>" + marked(markdownData) + "</article>";
    });
  } catch (err) {
    console.error("Could not read md files", err);
  }

  return htmlContent;
};