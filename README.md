# Recruitment Exercise - Test Automation Framework

Automated test suite for [SauceDemo](https://www.saucedemo.com) (web UI) and [DummyJSON](https://dummyjson.com) (REST API) built with CodeceptJS, Playwright, Gherkin, and Allure.


## Setup

```bash
npm install
npx playwright install chromium
```

Requires Node.js v18+ and Java (for Allure reports).

## Running Tests

```bash
# All tests
HEADLESS=true npm test

# Only web or API tests
HEADLESS=true npm run test:web
HEADLESS=true npm run test:api

# Specific scenario
HEADLESS=true npx codeceptjs run --features --steps --grep "Locked"

# With browser visible
npm run test:web
npm run test:api
```

## Test Reports

```bash
npm run allure:report
```

Screenshots on failure are saved to `output/`.

Proof of execution screenshots are in the `execution_screenshots/` folder.

## Project Structure

```
features/           # Gherkin test scenarios (.feature files)
  web/              # Web UI tests (@web tag)
  api/              # API tests (@api tag)
step_definitions/   # Step implementations for feature files
pages/              # Page Objects - selectors and methods per page
codecept.conf.ts    # Framework configuration
```

## Test Scenarios and Results

**Web UI tests** - saucedemo.com:
- Locked user login - PASSED
- Product sorting A-Z - PASSED
- Product sorting Z-A - PASSED
- Complete purchase flow - PASSED
- Problem user purchase - FAILED - `problem_user` has intentional UI defects on saucedemo: clicking "Sauce Labs Backpack" opens a different product, and add to cart doesn't work

**API tests** - dummyjson.com:
- Get all products - PASSED
- Create new product - PASSED
- Update product - PASSED
- Performance delay=0 - PASSED
- Performance delay=5000 - FAILED - API responds after ~5 seconds, which exceeds the 1000ms threshold
- Performance delay=6000 - FAILED - expected status 200 but API rejects delays over 5000ms and returns 400

## Design Notes

Each page of the application has its own Page Object file with selectors and methods. This way, if a selector changes on the website, I only need to update it in one place.

Steps like login and cart navigation are written once and reused across multiple scenarios to avoid duplication.

Web and API tests are separated with `@web` and `@api` tags, so they can be run independently.

For actions that require loops (like adding all items to cart or removing an item by index), I used `I.usePlaywrightTo()` to work with native Playwright. CodeceptJS's `I.click()` doesn't execute immediately — it adds actions to a queue. Inside a loop, the next Gherkin step can start before all the clicks have actually happened. `I.usePlaywrightTo()` solves this by running each click with `await`, so they complete in order before moving on.
