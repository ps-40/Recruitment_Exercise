const { I } = inject();

export = {
    itemName: '[data-test="inventory-item-name"]',
    sortDropdown: '[data-test="product-sort-container"]',
    addToCartButtons: 'button.btn_inventory',
    shoppingCart: '[data-test="shopping-cart-link"]',

    sortBy(option: string) {
        I.selectOption(this.sortDropdown, option);
    },

    async getAllProductNames(): Promise<string[]> {
        return await I.grabTextFromAll(this.itemName);
    },

    async addAllItemsToCart() {
        const selector = this.addToCartButtons
        await I.usePlaywrightTo('add all items to cart', async ({ page }) => {
            const buttons = page.locator(selector);
            const count = await buttons.count();
            for (let i = 0; i < count; i++) {
                await buttons.nth(i).click();
            }
        })
    },
    goToCart() {
        I.click(this.shoppingCart);
    },

    clickOnItem(itemName: string) {
        I.click(itemName);
    }
}