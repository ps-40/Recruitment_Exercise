const { I } = inject();

export = {
    itemNames: '[data-test="inventory-item-name"]',
    finishBtn: '[data-test="finish"]',

    async getItemCount(): Promise<number> {
        return await I.grabNumberOfVisibleElements(this.itemNames);
    },

    async getItemNames(): Promise<string[]> {
        return await I.grabTextFromAll(this.itemNames);
    },

    finish() {
        I.click(this.finishBtn);
    }

}