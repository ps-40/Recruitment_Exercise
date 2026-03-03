const { I, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage} = inject();
const assert = require('assert');

When('I fill with checkout information with first name {string} last name {string} and postal code {string}', 
    (firstName: string, lastName: string, postalCode: string) => {
    checkoutStepOnePage.fillCheckoutInformation(firstName, lastName, postalCode);
})

When ('I continue the checkout', () => {
    checkoutStepOnePage.continue();
})

Then('I should see {int} items in the checkout overview', async(count: number) => {
    const actualCount = await checkoutStepTwoPage.getItemCount();
    assert.strictEqual(actualCount, count);
})

When('I finish the purchase', () => {
    checkoutStepTwoPage.finish();
})

Then('I should see confirmation message', () => {
    checkoutCompletePage.seeConfirmation();
})
