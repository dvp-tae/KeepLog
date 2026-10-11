# KeepLog

> **Draft doc.** This is an initial orientation pass for the Claude Code harness, not exhaustive documentation. Expect gaps and revise as the repo settles.

KeepLog is a monorepo split into two independently developed apps:

- **`front/`** — React Native mobile app (iOS + Android), managed with `yarn`.
- **`server/`** — FastAPI API backed by PostgreSQL via SQLAlchemy + Alembic, Python 3.12 in a local `.venv` (pip).

Each app has its own `CLAUDE.md` with stack-specific conventions:

- [`front/CLAUDE.md`](./front/CLAUDE.md)
- [`server/CLAUDE.md`](./server/CLAUDE.md)

## Directory layout

```
KeepLog/
├── front/          # React Native app (yarn)
├── server/         # FastAPI API (Python, pip + .venv)
├── scripts/        # repo-level automation (commit/issue/PR helpers)
├── .github/        # CI workflows
├── .husky/         # git hooks (commitlint, etc.)
└── commitlint.config.cjs
```

`front/` and `server/` are independent projects with their own language, package manager, and toolchain — do not assume shared dependencies or a single install command at the repo root. The root `package.json` (pnpm) only holds repo tooling (husky, commitlint). Check each subproject's `CLAUDE.md` before running commands there.

## Stack summary

| App | Language | Framework | Package manager | Data layer |
|---|---|---|---|---|
| `front/` | TypeScript | React Native (bare, not Expo) | yarn | — |
| `server/` | Python 3.12 | FastAPI | pip + `.venv` | PostgreSQL 16 via SQLAlchemy, Alembic migrations |

Infrastructure: AWS EC2 (Ubuntu) + Docker Compose + Nginx. Server-side resources are named `app` (e.g. `~/app/db`, container `app-postgres`), not `keeplog`.

## Commit convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org/), enforced via commitlint + husky at the repo root (`commitlint.config.cjs`). Allowed types:

`feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, `chore`, `perf`, `revert`

Example: `feat(front): add login screen`, `fix(server): correct user query`.

## Root-level tooling

The repo root also holds shared tooling — husky hooks, commitlint config, helper scripts under `scripts/` (commit-all, GitHub issue/PR helpers), and CI workflows under `.github/workflows/`. These previously pointed at a since-removed `web/` Next.js project and have been rewired to `front/`/`server/`:

- `pnpm check:front:lint` / `pnpm check:front:type` — lint/typecheck `front/` (via `yarn`)
- `pnpm check:server:lint` / `pnpm check:server:test` — ruff lint+format check / pytest for `server/` (calls `server/.venv/bin/*` directly, so the venv must exist; tests need the local Postgres container running)
- `pnpm check:commit` (pre-commit hook) — front lint + server lint
- `pnpm check:push` (pre-push hook) — front typecheck + server tests
- `.github/workflows/ci.yml` — front: lint + typecheck; server: ruff, `alembic upgrade head` on a fresh Postgres service, pytest
- `.github/workflows/deploy-pages.yml` was removed — it published the old `web/` static blog to GitHub Pages, which no longer applies to a mobile app + API structure.
