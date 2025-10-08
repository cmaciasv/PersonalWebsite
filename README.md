# PersonalWebsite

A personal website to showcase my projects and skills.

## Live Site
[Placeholder for Live Site URL]

## Development

This is a monorepo using npm workspaces. Scripts should be run from the root directory with the `--workspace` flag to target a specific app.

### Running Scripts

For example, to run the development server for the `web` app:

```bash
npm run dev --workspace=apps/web
```

### Testing

The project contains both unit tests (Vitest) and end-to-end tests (Playwright).

#### Unit Tests

To run unit tests for a specific workspace (e.g., the `web` app), use the `--workspace` flag:

```bash
npm run test --workspace=apps/web
```

#### End-to-End (E2E) Tests

The E2E tests are located in the `/e2e` directory and are run using Playwright. To execute them, run the following command from the project root:

```bash
npx playwright test
```

