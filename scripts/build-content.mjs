import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");

function parseMarkdownFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    throw new Error(`Missing frontmatter in ${filePath}`);
  }

  const frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    frontmatter[key] = value;
  }

  if (!frontmatter.title || !frontmatter.date) {
    throw new Error(`Missing title or date in ${filePath}`);
  }

  return {
    title: frontmatter.title,
    date: frontmatter.date,
    body: match[2].trim()
  };
}

function buildContentDirectory(contentDir, outputFile) {
  if (!fs.existsSync(contentDir)) {
    throw new Error(`Content directory not found: ${contentDir}`);
  }

  const entries = fs
    .readdirSync(contentDir)
    .filter((fileName) => fileName.endsWith(".md") && !fileName.startsWith("_"))
    .map((fileName) => parseMarkdownFile(path.join(contentDir, fileName)))
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, `${JSON.stringify(entries, null, 2)}\n`, "utf8");

  return entries.length;
}

const postsCount = buildContentDirectory(
  path.join(rootDir, "content", "posts"),
  path.join(rootDir, "assets", "data", "posts.json")
);

const researchLogCount = buildContentDirectory(
  path.join(rootDir, "content", "research-log"),
  path.join(rootDir, "assets", "data", "research-log.json")
);

console.log(`Built ${postsCount} posts and ${researchLogCount} research log entries.`);
