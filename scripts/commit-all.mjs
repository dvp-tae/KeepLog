import { execFileSync } from "node:child_process";

const message = process.argv.slice(2).join(" ").trim();

if (!message) {
  console.error('Usage: pnpm commit:all -- "type(scope): subject"');
  process.exit(1);
}

execFileSync("git", ["add", "AGENTS.md", "ARCHITECTURE.md", ".github", "docs", "scripts", "blog"], {
  stdio: "inherit",
});
execFileSync("git", ["commit", "-m", message], { stdio: "inherit" });
