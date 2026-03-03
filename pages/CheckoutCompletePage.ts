const { I } = inject();

export = {
    completeHeader: '[data-test="complete-header"]',

    seeConfirmation() {
        I.see("Thank you for your order!", this.completeHeader);
    }
}