const { I, itemDetailsPage } = inject();

Then('I should be on item details page for {string}', (itemName: string) => {
    I.waitForElement(itemDetailsPage.itemName);
    I.see(itemName, itemDetailsPage.itemName);
});

When('I add item to the shopping cart from the item details page', () => {
    itemDetailsPage.addToCart();
})