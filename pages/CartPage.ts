const { I } = inject();

export = {
    removeButtons: 'button.cart_button',
    checkoutButton: '[data-test="checkout"]',
    itemNames: '[data-test="inventory-item-name"]',

    async getCartItemCount(): Promise<number> {
        return await I.grabNumberOfVisibleElements(this.itemNames);
    },

    async getCartItemNames(): Promise<string[]> {
        return await I.grabTextFromAll(this.itemNames);
    },

    async removeItem(index:number) {
        const selector = this.removeButtons;
        await I.usePlaywrightTo('remove cart item', async({page}) => {
            const buttons = page.locator(selector);
            await buttons.nth(index).click();
        })       
    },

    checkout() {
        I.click(this.checkoutButton);
    }
}
