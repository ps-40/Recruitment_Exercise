const { I, inventoryPage } = inject();
const assert = require('assert');

Then('I should be on the Inventory page', () => {
    I.waitForElement('#inventory_container');
    I.seeInCurrentUrl('/inventory.html');
})

When('I sort products by {string}', (option: string) => {
    inventoryPage.sortBy(option);
})

Then('The products should be sorted in ascending order', async() => {
    //grab all product names
    const names = await inventoryPage.getAllProductNames();
    //create a sorted copy
    const sorted = [...names].sort((a,b) => a.localeCompare(b));
    //compare current order (names) with expected order (sorted)
    assert.deepStrictEqual(names, sorted, 'Products are not sorted A-Z');
}) 

Then('The products should be sorted in descending order', async() => {
    const names = await inventoryPage.getAllProductNames();
    const sorted = [...names].sort((a,b) => b.localeCompare(a));
    assert.deepStrictEqual(names, sorted, 'Products are not sorted Z-A');
})

When('I add all items to the cart', () => {
    inventoryPage.addAllItemsToCart();
})

When('I go to the shopping cart', () => {
    inventoryPage.goToCart();
})

When('I click on {string} item', (productName: string) => {
    inventoryPage.clickOnItem(productName);
})