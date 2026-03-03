const { I, cartPage, checkoutStepTwoPage} = inject();
const assert = require('assert');

let cartItemList;

Then('I should be on the shopping cart', () => {
    I.waitForElement('[data-test="cart-list"]');
    I.seeInCurrentUrl('/cart.html');
})

Then ('I should see {int} items in the cart', async (count: number) => {
    const actualCount = await cartPage.getCartItemCount();
    assert.strictEqual(actualCount, count)
})

Then('I should see {string} in the cart', (itemName: string) => {
    I.see(itemName, cartPage.itemNames);
})

When('I remove item {int} from the cart', async (index: number) => {
    await cartPage.removeItem(index-1);
    //retrieve names of all items in the shopping cart after removing item
    cartItemList = await cartPage.getCartItemNames();
})

When('I proceed to checkout' , () => {
    cartPage.checkout();
})

// validate if checkout overview contain the same items as in the shopping cart
Then('The checkout overview should contain correct items', async() => {
    const overviewItems = await checkoutStepTwoPage.getItemNames();
    assert.deepStrictEqual(cartItemList, overviewItems);
})