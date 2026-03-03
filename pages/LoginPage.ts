const { I } = inject();

export = {
    fields: {
        username: '[data-test="username"]',
        password: '[data-test="password"]'
    },
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]',

    login(username: string, password: string) {
        I.fillField(this.fields.username, username);
        I.fillField(this.fields.password, password);
        I.click(this.loginButton);
    },

    seeError(errorText: string) {
        I.waitForElement(this.errorMessage);
        I.see(errorText, this.errorMessage);
    }
}