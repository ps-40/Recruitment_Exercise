const { I } = inject();

export = {

    firstNameInput: '[data-test="firstName"]',
    lastNameInput: '[data-test="lastName"]',
    postalCodeInput: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',

    fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        I.fillField(this.firstNameInput, firstName);
        I.fillField(this.lastNameInput, lastName);
        I.fillField(this.postalCodeInput, postalCode);
    },

    continue() {
        I.click(this.continueButton);
    }
}