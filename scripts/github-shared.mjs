import { execFileSync } from "node:child_process";

let cachedViewerLogin = null;

export const runGit = (args) =>
  execFileSync("git", args, { encoding: "utf8" }).trim();

export const getRepoFullName = () => {
  const remote = process.env.GITHUB_REPOSITORY || runGit(["remote", "get-url", "origin"]);

  if (remote.includes("github.com:")) {
    return remote.split("github.com:")[1].replace(/\.git$/, "");
  }

  if (remote.includes("github.com/")) {
    return remote.split("github.com/")[1].replace(/\.git$/, "");
  }

  throw new Error("Could not resolve GitHub repository from origin remote.");
};

export const requireToken = () => {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is required.");
  }
  return token;
};

export const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsed = {};

  for (let index = 0; index < args.length; index += 1) {
    const value = args[index];
    if (!value.startsWith("--")) continue;
    const key = value.slice(2);
    const next = args[index + 1];
    if (!next || next.startsWith("--")) {
      parsed[key] = "true";
      continue;
    }
    parsed[key] = next;
    index += 1;
  }

  return parsed;
};

export const githubRequest = async ({ token, path, method = "POST", body }) => {
  const response = await fetch(`https://api.github.com${path}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`GitHub API request failed (${response.status}): ${JSON.stringify(data)}`);
  }

  return data;
};

export const getAuthenticatedLogin = async (token) => {
  if (cachedViewerLogin) return cachedViewerLogin;

  const viewer = await githubRequest({
    token,
    path: "/user",
    method: "GET",
  });

  cachedViewerLogin = viewer.login;
  return cachedViewerLogin;
};
