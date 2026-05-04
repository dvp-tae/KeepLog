import {
  getAuthenticatedLogin,
  getRepoFullName,
  githubRequest,
  parseArgs,
  requireToken,
  runGit,
} from "./github-shared.mjs";

const args = parseArgs();
const title = args.title?.trim();
const body = args.body?.trim() || "";
const base = args.base?.trim() || "main";
const head = args.head?.trim() || runGit(["branch", "--show-current"]);
const draft = args.draft === "true";
const closeIssuePattern = /\bclose\s+#\d+\b/i;

const appendCloseIssue = (value, issueNumber) => {
  const closeLine = `close #${issueNumber}`;
  if (!value) return closeLine;
  if (closeIssuePattern.test(value)) return value;
  return `${value}\n\n${closeLine}`;
};

const getIssueNumberFromBranch = (branchName) => {
  const match = branchName.match(/\/(\d+)$/);
  return match?.[1] ?? null;
};

if (!title) {
  console.error('Usage: pnpm pr:create -- --title "제목" --body "본문" [--base main] [--head 브랜치명] [--draft true]');
  process.exit(1);
}

if (!head || head === base) {
  console.error("Create the PR from a non-base branch.");
  process.exit(1);
}

const issueNumber = getIssueNumberFromBranch(head);

if (!issueNumber && !closeIssuePattern.test(body)) {
  console.error("PR body must include `close #이슈번호`, or the branch name must end with the issue number.");
  process.exit(1);
}

const finalBody = appendCloseIssue(body, issueNumber);

const token = requireToken();
const repo = getRepoFullName();
const [owner, name] = repo.split("/");
const assignee = await getAuthenticatedLogin(token);

const pullRequest = await githubRequest({
  token,
  path: `/repos/${owner}/${name}/pulls`,
  body: {
    title,
    body: finalBody,
    base,
    head,
    draft,
  },
});

await githubRequest({
  token,
  path: `/repos/${owner}/${name}/issues/${pullRequest.number}`,
  method: "PATCH",
  body: {
    assignees: [assignee],
  },
});

console.log(`Created PR #${pullRequest.number}: ${pullRequest.html_url}`);
