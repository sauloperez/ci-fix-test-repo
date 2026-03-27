# CI Fix Test Repository

This repository serves as a test target for the [ci-fix](https://github.com/sauloperez/ci-fix) agent.

## Purpose

Contains intentional bugs that the ci-fix agent will diagnose and fix:

- **Test failure bug**: `src/utils/calc.ts` - calculateDiscount multiplies by 0.5 incorrectly
- **Lint error bug**: `src/components/SearchBar.tsx` - unused React imports (useState, useCallback)

## Usage

The ci-fix agent will:
1. Read mock CI failure data from fixtures
2. Fix the code in a Docker sandbox
3. Push fixes to branches in this repo
4. Create real PRs against `main`

## Structure

```
src/
├── components/
│   └── SearchBar.tsx    (lint error: unused imports)
└── utils/
    ├── calc.ts          (test failure: wrong discount calculation)
    ├── calc.test.ts
    ├── format.ts
    └── format.test.ts
```

## PRs Created by Agent

PRs from the ci-fix agent will have branches named `ci-fix/{scenario}-{timestamp}`.
