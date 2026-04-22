import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const requiredPaths = [
  "AGENTS.md",
  "ARCHITECTURE.md",
  "docs/design-docs/index.md",
  "docs/design-docs/core-beliefs.md",
  "docs/product-specs/index.md",
  "docs/exec-plans/README.md",
  "docs/quality/QUALITY_SCORE.md",
  "docs/operations/RELIABILITY.md",
  "docs/operations/SECURITY.md",
  "docs/operations/HARNESS_WORKFLOW.md",
  "docs/frontend/FRONTEND.md",
  "docs/testing/TESTING.md",
  "docs/observability/OBSERVABILITY.md",
  "docs/references/index.md",
  ".github/PULL_REQUEST_TEMPLATE.md",
];

const markdownRoots = ["AGENTS.md", "ARCHITECTURE.md", "docs"];
const markdownLinkPattern = /\[[^\]]+\]\((?!https?:\/\/|mailto:|#)([^)]+)\)/g;

const errors = [];

const walk = (targetPath) => {
  const absolutePath = path.join(repoRoot, targetPath);
  const stat = fs.statSync(absolutePath);

  if (stat.isFile()) {
    return [targetPath];
  }

  return fs
    .readdirSync(absolutePath, { withFileTypes: true })
    .flatMap((entry) => {
      const child = path.join(targetPath, entry.name);
      if (entry.isDirectory()) {
        return walk(child);
      }
      return child.endsWith(".md") ? [child] : [];
    });
};

for (const requiredPath of requiredPaths) {
  if (!fs.existsSync(path.join(repoRoot, requiredPath))) {
    errors.push(`Missing required path: ${requiredPath}`);
  }
}

const markdownFiles = markdownRoots.flatMap(walk);

for (const file of markdownFiles) {
  const absolutePath = path.join(repoRoot, file);
  const content = fs.readFileSync(absolutePath, "utf8");
  const matches = content.matchAll(markdownLinkPattern);

  for (const match of matches) {
    const rawLink = match[1].split("#")[0];
    if (!rawLink || rawLink.startsWith("<")) {
      continue;
    }

    const resolvedPath = path.normalize(path.join(path.dirname(file), rawLink));
    if (!fs.existsSync(path.join(repoRoot, resolvedPath))) {
      errors.push(`${file}: broken relative link -> ${rawLink}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Documentation check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Documentation check passed for ${markdownFiles.length} markdown files.`,
);
