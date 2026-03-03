const { I } = inject();

export = {

    itemName: '[data-test="inventory-item-name"]',
    addToCartBtn: '[data-test="add-to-cart"]',

    addToCart() {
        I.click(this.addToCartBtn);
    }
}