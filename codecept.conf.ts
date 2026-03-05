import { setHeadlessWhen } from '@codeceptjs/configure';

setHeadlessWhen(process.env.HEADLESS);

export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*.test.ts',
  output: './output',

  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true,
      windowSize: '1280x720',
      waitForNavigation: 'load',
      waitForTimeout: 10000,
    },
    REST: {
      endpoint: 'https://dummyjson.com'
    },
    JSONResponse: {}
  },

  include: {
    I: './steps_file.ts',
    loginPage: './pages/LoginPage.ts',
    inventoryPage: './pages/InventoryPage.ts',
    cartPage: './pages/CartPage.ts',
    checkoutStepOnePage: './pages/CheckoutStepOnePage.ts',
    checkoutStepTwoPage: './pages/CheckoutStepTwoPage.ts',
    checkoutCompletePage: './pages/CheckoutCompletePage.ts',
    itemDetailsPage: './pages/ItemDetailsPage.ts',
  },

  gherkin: {
    features: [
      './features/web/*.feature',
      './features/api/*.feature',
    ],
    steps: [
      './step_definitions/web/login.steps.ts',
      './step_definitions/web/inventory.steps.ts',
      './step_definitions/web/cart.steps.ts',
      './step_definitions/web/checkout.steps.ts',
      './step_definitions/web/item_details.steps.ts',
      './step_definitions/api/products_steps.ts',
    ],
  },

  plugins: {
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      resultsDir: './allure-results',
    },
    screenshotOnFail: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
      retries: 3,
    },
  },

  name: 'recruitment_exercise',
};