# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A fullstack Todo app: Go/Fiber API backed by MongoDB, with a React + TypeScript + Vite frontend using ChakraUI and TanStack Query. In production the Go binary serves the built client from `client/dist`.

## Commands

### Backend (Go, run from repo root)

```bash
go run main.go              # run the API directly (reads .env, needs MONGODB_URI)
go build -o main .           # build binary
air                          # hot-reload dev server (config: air.toml)
```

Requires a `.env` file (see `.env.sample`): `PORT`, `MONGODB_URI`, `ENV`. When `ENV=production`, `.env` is not loaded (expects real env vars) and the app also serves static files from `client/dist`.

### Frontend (from `client/`)

```bash
npm run dev        # Vite dev server
npm run build       # tsc typecheck + vite build
npm run lint        # eslint (max-warnings 0)
npm run preview     # preview production build
```

There is no test suite configured for either the backend or frontend.

## Architecture

- **`main.go`** — single-file Fiber API. Defines the `Todo` model and all four routes directly (no router/handler split): `GET/POST /api/todos`, `PATCH/DELETE /api/todos/:id`. MongoDB collection is a package-level var (`collection`) set up once in `main()`.
- **`client/src/App.tsx`** — defines `BASE_URL`, switching between `http://localhost:5000/api` in dev and `/api` in production (same-origin, since Go serves the built client in prod). Other components import `BASE_URL` from here rather than hardcoding it.
- **Data fetching** — TanStack Query (`useQuery`/`useMutation`) directly against the Fiber API in `client/src/components/*`; no separate API client layer.
- **UI** — ChakraUI with a custom theme in `client/src/chakra/theme.ts`; components under `client/src/components/` (`Navbar`, `TodoForm`, `TodoList`, `TodoItem`).
- **CORS** is currently commented out in `main.go`; dev relies on the frontend hitting `localhost:5000` directly and there being no cross-origin issue during local testing (Vite doesn't proxy `/api`).
