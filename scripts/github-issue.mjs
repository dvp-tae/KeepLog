import {
  getAuthenticatedLogin,
  getRepoFullName,
  githubRequest,
  parseArgs,
  requireToken,
} from "./github-shared.mjs";

const args = parseArgs();
const title = args.title?.trim();
const body = args.body?.trim() || "";

if (!title) {
  console.error('Usage: pnpm issue:create -- --title "제목" --body "본문"');
  process.exit(1);
}

const token = requireToken();
const repo = getRepoFullName();
const [owner, name] = repo.split("/");
const assignee = await getAuthenticatedLogin(token);

const issue = await githubRequest({
  token,
  path: `/repos/${owner}/${name}/issues`,
  body: {
    title,
    body,
    assignees: [assignee],
  },
});

console.log(`Created issue #${issue.number}: ${issue.html_url}`);
