import { getRepoFullName, githubRequest, parseArgs, requireToken, runGit } from "./github-shared.mjs";

const args = parseArgs();
const title = args.title?.trim();
const body = args.body?.trim() || "";
const base = args.base?.trim() || "main";
const head = args.head?.trim() || runGit(["branch", "--show-current"]);
const draft = args.draft === "true";

if (!title) {
  console.error('Usage: pnpm pr:create -- --title "제목" --body "본문" [--base main] [--head 브랜치명] [--draft true]');
  process.exit(1);
}

if (!head || head === base) {
  console.error("Create the PR from a non-base branch.");
  process.exit(1);
}

const token = requireToken();
const repo = getRepoFullName();
const [owner, name] = repo.split("/");

const pullRequest = await githubRequest({
  token,
  path: `/repos/${owner}/${name}/pulls`,
  body: {
    title,
    body,
    base,
    head,
    draft,
  },
});

console.log(`Created PR #${pullRequest.number}: ${pullRequest.html_url}`);
